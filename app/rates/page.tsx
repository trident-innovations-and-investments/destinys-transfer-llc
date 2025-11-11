import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { tlRates, ltlRates, serviceRates, rateTerms } from '@/data/rates';
import { companyInfo } from '@/data/company';
import TLRateTable from '@/components/TLRateTable';
import LTLRateTable from '@/components/LTLRateTable';
import { formatCurrency } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

/**
 * Rates page metadata for SEO
 * Optimized for pricing and location-based searches
 */
export const metadata: Metadata = {
  title: 'Shipping Rates & Locations - Competitive Pricing in Florida',
  description: `Competitive shipping and transfer rates from ${rateTerms.origin}. Transparent pricing for TL, LTL, Short Haul, and Hot Shot services. Serving major Florida cities including Orlando, Tampa, Miami, Jacksonville, and more. Get a custom quote today.`,
  keywords: [
    'shipping rates Florida',
    'freight rates Orlando',
    'TL shipping rates',
    'LTL shipping rates',
    'shipping prices Florida',
    'trucking rates Orlando',
    'cargo transfer rates',
    'commercial shipping rates',
  ],
  openGraph: {
    title: 'Shipping Rates & Locations - Competitive Pricing in Florida',
    description: `Competitive shipping and transfer rates. Transparent pricing for TL, LTL, Short Haul, and Hot Shot services.`,
    url: `${siteUrl}/rates`,
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
    title: 'Shipping Rates & Locations - Competitive Pricing in Florida',
    description: `Competitive shipping and transfer rates. Transparent pricing for TL, LTL, Short Haul, and Hot Shot services.`,
    images: [`${siteUrl}/DT_logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/rates`,
  },
};

/**
 * Rates page displaying all service rates and coverage information
 * Styled to match template.html design
 */
export default function Rates() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/4372155/pexels-photo-4372155.jpeg"
            alt="Logistics and shipping operations"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-blue-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Locations & Rates
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              Competitive shipping and transfer rates from {rateTerms.origin}.
            </p>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-center">
            Competitive Rates
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Transparent pricing based on distance, weight, and service type
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* TL Rates */}
            <TLRateTable rates={tlRates} />

            {/* LTL Rates */}
            <LTLRateTable rates={ltlRates} />

            {/* Additional Service Rates */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Additional Services
                </h3>
                <p className="text-sm text-gray-600 mt-1">Specialized shipping options</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {serviceRates && serviceRates.length > 0 ? (
                    serviceRates.map((service, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between py-3 ${
                          index < serviceRates.length - 1
                            ? 'border-b border-gray-100'
                            : ''
                        }`}
                      >
                        <div>
                          <div className="font-medium text-gray-900">
                            {service.description}
                          </div>
                          {service.includes && service.includes.length > 0 && (
                            <ul className="mt-2 space-y-1">
                              {service.includes.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  <svg
                                    className="w-4 h-4 text-gray-900 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            {typeof service.rate === 'number'
                              ? formatCurrency(service.rate)
                              : service.rate}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">No service rates available</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Rate Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-700 mr-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Rate Information</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Rates are estimates and may vary based on freight class, weight,
                  dimensions, special handling requirements, and seasonal demand. Volume
                  discounts available for regular customers. Contact us for an accurate
                  quote tailored to your specific needs.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-blue-800">
                    <span className="font-medium">Included in rates:</span>{' '}
                    {rateTerms.included.join(', ')}
                  </div>
                  <div className="text-sm text-blue-800">
                    <span className="font-medium">Additional stops:</span>{' '}
                    {formatCurrency(rateTerms.additionalStopCharge)} per stop after 5 stops
                  </div>
                  <div className="text-sm text-blue-800">
                    <span className="font-medium">Liftgate & Inside Delivery:</span>{' '}
                    {formatCurrency(rateTerms.liftgateInsideDeliveryCharge)} - {rateTerms.liftgateInsideDeliveryNote}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Premium Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20 mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Competitive Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us for shipping and transfer rates to destinations not listed or for
              special requirements. We&apos;ll provide a personalized quote.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              <span>Get a Quote</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
