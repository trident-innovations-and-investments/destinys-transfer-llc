import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { companyInfo, serviceDescriptions } from '@/data/company';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import { servicesFAQs } from '@/data/faqs';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

/**
 * Services page metadata for SEO
 * Optimized for service-related searches
 */
export const metadata: Metadata = {
  title: 'LTL & TL Trucking Services Orlando FL | Less Than Truckload Shipping',
  description: `Professional LTL (Less Than Truckload) and TL trucking services from Orlando, Florida. ${companyInfo.experience} years experience serving Orlando, Tampa, Miami, Jacksonville. 48-foot trailer with liftgate, 22 pallet capacity. Licensed carrier offering competitive LTL shipping rates from Orlando. Get a quote today.`,
  keywords: [
    'LTL shipping Orlando',
    'LTL trucking Orlando',
    'less than truckload Orlando',
    'TL shipping Orlando',
    'truckload shipping Orlando',
    'trucking services Orlando Florida',
    'freight services Orlando',
    'LTL carrier Orlando',
    'Orlando to Tampa LTL',
    'Orlando to Miami LTL',
    'liftgate service Orlando',
    'pallet shipping Orlando',
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
              LTL & TL Trucking Services from Orlando, FL
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {companyInfo.name} offers comprehensive <strong>LTL (Less Than Truckload)</strong> and <strong>TL (Truckload) shipping services</strong> tailored to your business needs throughout Florida.
            </p>
            <p className="text-lg text-gray-600">
              Check our <Link href="/rates" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-600/30">competitive shipping rates</Link> or <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-600/30">request a free quote</Link> today.
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

      {/* Why Choose LTL Section - SEO Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
            Why Choose LTL Shipping from Orlando?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost-Effective LTL Solutions</h3>
              <p className="text-gray-700 mb-4">
                LTL (Less Than Truckload) shipping from Orlando offers significant cost savings when your freight doesn&apos;t require a full truck. Our 48-foot trailer with 22 pallet capacity means you only pay for the space you use, making it ideal for businesses shipping 1-10 pallets throughout Florida.
              </p>
              <p className="text-gray-700">
                With competitive rates to Tampa ($700), Miami ($1,250), and Jacksonville ($1,000), our LTL services provide the perfect balance of affordability and reliability for regular Florida shipments.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orlando&apos;s Trusted LTL Carrier</h3>
              <p className="text-gray-700 mb-4">
                Located in Orlando, we understand Florida&apos;s shipping lanes and offer optimized routes to major cities. Our {companyInfo.experience} years of experience means reliable transit times, professional handling, and personalized service that large national carriers can&apos;t match.
              </p>
              <p className="text-gray-700">
                Our hydraulic liftgate service ensures smooth loading and unloading at any location, even without a dock. Perfect for retail stores, warehouses, and businesses throughout Central Florida.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">LTL Service Coverage from Orlando</h3>
            <p className="text-gray-700 mb-4">
              We provide comprehensive LTL trucking services connecting Orlando to all major Florida cities and surrounding areas.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">North Florida</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Jacksonville LTL Service</li>
                  <li>• Daytona Beach</li>
                  <li>• Ocala</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">West Coast</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Tampa LTL Service</li>
                  <li>• Clearwater</li>
                  <li>• Sarasota</li>
                  <li>• Fort Myers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">South Florida</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Miami LTL Service</li>
                  <li>• Fort Pierce</li>
                  <li>• Port St. Lucie</li>
                  <li>• Melbourne</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FAQSection faqs={servicesFAQs} />
        </div>
      </section>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(servicesFAQs)) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Services', url: `${siteUrl}/services` }
          ])) 
        }}
      />

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
