import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import './globals.css';

const SITE_URL = 'https://biodonth.com.br';
const SITE_NAME = 'Biodonth Odontologia Integrada';
const SITE_TAGLINE = 'Odontologia integrada em Artur Alvim, São Paulo';
const SITE_DESCRIPTION =
  'Clínica de odontologia integrada em Artur Alvim, São Paulo. Primeira consulta sem pressa, plano de tratamento na mão, equipe inteira pensando o seu caso. Sem fila de convênio. Desde 2015.';

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
