import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: `${companyInfo.name} - Professional Shipping & Transfer Services`,
  description:
    `${companyInfo.name} provides professional shipping and cargo transfer services including truckload (TL) and less than truckload (LTL). ${companyInfo.experience} years of safe driving experience. Serving Florida with reliable shipping and transfer services.`,
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
  ],
};

/**
 * Root layout component
 * Provides the base structure for all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

