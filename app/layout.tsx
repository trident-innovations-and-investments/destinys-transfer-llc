import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import { companyInfo } from '@/data/company';
import StructuredData from '@/components/StructuredData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

/**
 * Default metadata for all pages
 * Implements 2025 SEO best practices including Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyInfo.name} - Professional Shipping & Transfer Services in Orlando, FL`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    `${companyInfo.name} provides professional shipping and cargo transfer services including truckload (TL) and less than truckload (LTL). ${companyInfo.experience} years of safe driving experience. Serving Florida with reliable shipping and transfer services. Licensed and insured.`,
  keywords: [
    'shipping',
    'transfer services',
    'cargo transfer',
    'freight shipping',
    'truckload shipping',
    'LTL shipping',
    'Orlando',
    'Florida',
    'shipping services',
    'cargo delivery',
    'freight services Orlando',
    'trucking services Florida',
    'commercial shipping',
    'logistics services',
  ],
  authors: [{ name: companyInfo.owner }],
  creator: companyInfo.owner,
  publisher: companyInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: companyInfo.name,
    title: `${companyInfo.name} - Professional Shipping & Transfer Services`,
    description: `${companyInfo.name} provides professional shipping and cargo transfer services. ${companyInfo.experience} years of safe driving experience. Serving Florida with reliable shipping and transfer services.`,
    images: [
      {
        url: `${siteUrl}/DT_logo.png`,
        width: 768,
        height: 768,
        alt: `${companyInfo.name} brand logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} - Professional Shipping & Transfer Services`,
    description: `${companyInfo.name} provides professional shipping and cargo transfer services. ${companyInfo.experience} years of safe driving experience.`,
    images: [`${siteUrl}/DT_logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

/**
 * Root layout component
 * Provides the base structure for all pages with SEO enhancements
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

