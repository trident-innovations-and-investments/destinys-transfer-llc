import Link from 'next/link';
import { tlRates, serviceRates, rateTerms } from '@/data/rates';
import RateTable from '@/components/RateTable';
import CoverageMap from '@/components/CoverageMap';
import { formatCurrency } from '@/lib/utils';

/**
 * Rates page displaying all service rates and coverage information
 * Styled to match template.html design
 */
export default function Rates() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Locations & Rates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Competitive shipping and transfer rates from {rateTerms.origin}. All rates
            include liftgate and inside delivery transfer services.
          </p>
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

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* TL Rates */}
            <RateTable rates={tlRates} origin={rateTerms.origin} />

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
                  {serviceRates.map((service, index) => (
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
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          {typeof service.rate === 'number'
                            ? formatCurrency(service.rate)
                            : service.rate}
                        </div>
                      </div>
                    </div>
                  ))}
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
                    {formatCurrency(rateTerms.additionalStopCharge)} per stop after 4 stops
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CoverageMap />
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us for shipping and transfer rates to destinations not listed or for
              special requirements
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
