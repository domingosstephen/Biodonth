import { CONTACT } from '@/content/contact';

const SITE_URL = 'https://biodonth.com.br';

export function BusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Biodonth Odontologia Integrada',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/brand/Biodonth-logo-full.svg`,
          width: 600,
          height: 200,
        },
        sameAs: [
          'https://www.instagram.com/biodonthodontologia',
          'https://www.facebook.com/biodonthodontologia',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${CONTACT.phone.raw}`,
          contactType: 'reservations',
          areaServed: 'BR',
          availableLanguage: ['Portuguese', 'English'],
        },
      },
      {
        '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
        '@id': `${SITE_URL}/#dentist`,
        name: 'Biodonth Odontologia Integrada',
        alternateName: 'Biodonth',
        description:
          'Cl\u00ednica de odontologia integrada em Arthur Alvim, S\u00e3o Paulo. Primeira consulta sem pressa, plano de tratamento escrito na m\u00e3o, equipe inteira pensando o seu caso. Desde 2015.',
        url: SITE_URL,
        telephone: `+${CONTACT.phone.raw}`,
        email: CONTACT.email,
        priceRange: '$',
        image: `${SITE_URL}/opengraph-image`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT.address.street,
          addressLocality: CONTACT.address.city,
          addressRegion: CONTACT.address.state,
          postalCode: CONTACT.address.cep,
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          // [CONFIRM-BIODONTH] Coordinates from Google Maps for Rua Desembargador Rocha Portela, 1012
          latitude: -23.539546,
          longitude: -46.4891055,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '14:00',
          },
        ],
        medicalSpecialty: [
          'Dentistry',
          'Orthodontics',
          'Periodontics',
          'ProstheticDentistry',
          'PediatricDentistry',
        ],
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Implantes dent\u00e1rios' },
          { '@type': 'MedicalProcedure', name: 'Ortodontia' },
          { '@type': 'MedicalProcedure', name: 'Facetas em porcelana' },
          { '@type': 'MedicalProcedure', name: 'Clareamento dental' },
          { '@type': 'MedicalProcedure', name: 'Reabilita\u00e7\u00e3o oral' },
          { '@type': 'MedicalProcedure', name: 'Odontopediatria' },
          { '@type': 'MedicalProcedure', name: 'Pr\u00f3tese dent\u00e1ria' },
          { '@type': 'MedicalProcedure', name: 'Profilaxia' },
          { '@type': 'MedicalProcedure', name: 'Periodontia' },
        ],
        sameAs: [
          'https://www.instagram.com/biodonthodontologia',
          'https://www.facebook.com/biodonthodontologia',
        ],
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Biodonth Odontologia Integrada',
        inLanguage: 'pt-BR',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
