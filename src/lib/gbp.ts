// Google Places API (New) integration for fetching live GBP data.
// Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID env vars.
//
// HOW TO SET UP:
// 1. Go to https://console.cloud.google.com/
// 2. Create or select a project
// 3. Enable "Places API (New)"
// 4. Create an API key (restrict it to Places API only)
// 5. Find Biodonth's Place ID:
//    - Go to https://developers.google.com/maps/documentation/places/web-service/place-id-finder
//    - Search "Biodonth Odontologia Integrada"
//    - Copy the Place ID (starts with "ChI...")
// 6. Add to .env.local:
//    GOOGLE_PLACES_API_KEY=your_key_here
//    GOOGLE_PLACE_ID=the_place_id_here

import type { Testimonial } from '@/content/testimonials';

type PlacesReview = {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
};

type PlacesResponse = {
  id: string;
  displayName?: { text: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
  currentOpeningHours?: {
    openNow: boolean;
    weekdayDescriptions: string[];
  };
  formattedAddress?: string;
  nationalPhoneNumber?: string;
  internationalPhoneNumber?: string;
  websiteUri?: string;
  googleMapsUri?: string;
};

export type GBPData = {
  averageRating: number;
  totalReviews: number;
  profileUrl: string;
  reviews: Testimonial[];
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function formatDate(publishTime: string): string {
  const date = new Date(publishTime);
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export async function fetchGBPData(): Promise<GBPData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn(
      '[GBP] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID. Using static fallback data.'
    );
    return null;
  }

  const fieldMask = [
    'id',
    'displayName',
    'rating',
    'userRatingCount',
    'reviews',
    'googleMapsUri',
  ].join(',');

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': fieldMask,
        },
        next: { revalidate: 86400 }, // revalidate daily
      }
    );

    if (!res.ok) {
      console.error(`[GBP] Places API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const data: PlacesResponse = await res.json();

    const reviews: Testimonial[] = (data.reviews ?? [])
      .filter((r) => r.rating >= 4 && (r.originalText?.text || r.text?.text))
      .map((r, i) => ({
        id: `gbp-${i}`,
        authorName: r.authorAttribution.displayName,
        initials: getInitials(r.authorAttribution.displayName),
        rating: r.rating as 1 | 2 | 3 | 4 | 5,
        text: (r.originalText?.text || r.text?.text) ?? '',
        date: formatDate(r.publishTime),
      }));

    return {
      averageRating: data.rating ?? 4.9,
      totalReviews: data.userRatingCount ?? 0,
      profileUrl: data.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      reviews,
    };
  } catch (err) {
    console.error('[GBP] Failed to fetch Places data:', err);
    return null;
  }
}
