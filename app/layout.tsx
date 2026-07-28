import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { NavigationService } from '@/lib/services/NavigationService';
import { FooterService } from '@/lib/services/FooterService';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Patrocinador Eduardo Cruz Alcántara`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'Oriflame',
    'Eduardo Cruz Alcántara',
    'Negocio Digital 90 Días',
    'Desarrollo de Diamantes',
    'Emprendimiento Independiente',
    'Capacitación de Distribuidores',
  ],
  authors: [{ name: siteConfig.sponsor.name }],
  creator: siteConfig.sponsor.name,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = await NavigationService.getNavigation();
  const footerData = await FooterService.getFooterData();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    sponsor: {
      '@type': 'Person',
      name: siteConfig.sponsor.name,
      jobTitle: siteConfig.sponsor.role,
    },
  };

  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#081827] text-white min-h-screen flex flex-col antialiased selection:bg-[#D6A74E] selection:text-[#081827]">
        <Navbar navItems={navItems} />
        <main className="flex-1">{children}</main>
        <Footer footerData={footerData} />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
