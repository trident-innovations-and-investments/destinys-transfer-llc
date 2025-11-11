import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { companyInfo, serviceDescriptions } from '@/data/company';
import ServiceCard from '@/components/ServiceCard';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

/**
 * Services page metadata for SEO
 * Optimized for service-related searches
 */
export const metadata: Metadata = {
  title: 'Shipping & Transfer Services - LTL, TL, Short Haul & Hot Shot',
  description: `Comprehensive shipping and cargo transfer services including Truckload (TL), Less Than Truckload (LTL), Short Haul, and Hot Shot services. Professional equipment with liftgate and inside delivery options. Serving Florida with ${companyInfo.experience} years of experience.`,
  keywords: [
    'Truckload shipping services',
    'LTL shipping services',
    'short haul shipping',
    'hot shot shipping',
    'liftgate service',
    'inside delivery service',
    'cargo transfer services',
    'freight services Florida',
  ],
  openGraph: {
    title: 'Shipping & Transfer Services - LTL, TL, Short Haul & Hot Shot',
    description: `Comprehensive shipping and cargo transfer services. Professional equipment with liftgate and inside delivery options.`,
    url: `${siteUrl}/services`,
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
    title: 'Shipping & Transfer Services - LTL, TL, Short Haul & Hot Shot',
    description: `Comprehensive shipping and cargo transfer services. Professional equipment with liftgate and inside delivery options.`,
    images: [`${siteUrl}/DT_logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

/**
 * Services page detailing all available trucking services
 * Styled to match template.html design
 */
export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Shipping & Transfer Services
            </h1>
            <p className="text-lg text-gray-600">
              {companyInfo.name} offers comprehensive shipping and cargo transfer
              services tailored to your business needs.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/loading.jpg"
              alt="Truck loading and unloading"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ServiceCard
              title={serviceDescriptions.tl.title}
              description={serviceDescriptions.tl.description}
              features={serviceDescriptions.tl.features}
            />
            <ServiceCard
              title={serviceDescriptions.ltl.title}
              description={serviceDescriptions.ltl.description}
              features={serviceDescriptions.ltl.features}
            />
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title={serviceDescriptions.shortHaul.title}
              description={serviceDescriptions.shortHaul.description}
              features={serviceDescriptions.shortHaul.features}
            />
            <ServiceCard
              title={serviceDescriptions.hotShot.title}
              description={serviceDescriptions.hotShot.description}
              features={serviceDescriptions.hotShot.features}
            />
          </div>
        </div>
      </section>

      {/* Equipment Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
          Equipment & Capabilities
        </h2>
        <div className="mb-12 rounded-lg overflow-hidden max-w-5xl mx-auto">
          <Image
            src="/shipping-image.jpeg"
            alt="Professional 48-foot trailer with liftgate showcasing our modern trucking equipment"
            width={1200}
            height={400}
            className="w-full h-64 md:h-72 object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Trailer</h3>
            <ul className="space-y-3 text-gray-700">
              {companyInfo.equipment && companyInfo.equipment.length > 0 ? (
                companyInfo.equipment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
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
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-sm">No equipment listed</li>
              )}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Service Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
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
                <span>Liftgate service available</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
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
                <span>Inside delivery up to 20 feet. must be APPROVED by SHIPPER</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
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
                <span>Multiple stop capabilities</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
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
                <span>Flexible scheduling</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action with Premium Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20 mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started Today
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Need More Information?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your shipping and transfer needs and get a
              customized quote tailored to your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              <span>Contact Us for a Quote</span>
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
