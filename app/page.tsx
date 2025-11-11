import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { companyInfo, serviceDescriptions } from '@/data/company';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import { homeFAQs } from '@/data/faqs';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

/**
 * Home page metadata for SEO
 * Optimized for local search and entity-first SEO
 */
export const metadata: Metadata = {
  title: 'LTL Shipping Orlando | Less Than Truckload Trucking Services Florida',
  description: `#1 LTL shipping company from Orlando, FL. ${companyInfo.experience} years experience offering less than truckload and full truckload trucking services. 48-ft trailer with liftgate, 22 pallet capacity. Licensed LTL carrier serving Orlando, Tampa, Miami, Jacksonville. Competitive rates, on-time delivery. Get your free LTL quote today!`,
  keywords: [
    'LTL shipping Orlando',
    'less than truckload Orlando',
    'LTL trucking Orlando FL',
    'LTL carrier Orlando',
    'LTL freight Orlando',
    'Orlando LTL services',
    'TL shipping Orlando',
    'trucking services Orlando Florida',
    'freight shipping Orlando',
    'Orlando to Tampa LTL',
    'Orlando to Miami trucking',
    'pallet shipping Orlando',
    'liftgate service Orlando',
  ],
  openGraph: {
    title: 'Professional Shipping & Transfer Services from Orlando, FL',
    description: `Reliable LTL & TL shipping services across Florida. ${companyInfo.experience} years of safe driving experience. Competitive rates and on-time delivery.`,
    url: siteUrl,
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
    title: 'Professional Shipping & Transfer Services in Orlando, FL',
    description: `Reliable LTL & TL shipping services across Florida. ${companyInfo.experience} years of safe driving experience.`,
    images: [`${siteUrl}/DT_logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

/**
 * Home page with hero section, company overview, and service highlights
 * Styled to match template.html design
 */
export default function Home() {
  return (
    <div>
      {/* Hero Section with Premium Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {companyInfo.experience}+ Years of Excellence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Reliable LTL & TL{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Shipping Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-600/30">LTL and TL trucking services</Link> in Orlando, Florida. Competitive <Link href="/rates" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-600/30">shipping rates</Link>, on-time delivery, and exceptional service for all your freight needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Request Quote</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/rates"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-900 text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
                >
                  View Rates
                </Link>
              </div>
              
              {/* Stats Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{companyInfo.experience}+</div>
                    <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600 mt-1">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600 mt-1">Licensed & Insurance upon request</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-10 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
                <Image
                  src="/main-hero-image.jpeg"
                  alt="Professional freight truck on highway representing reliable shipping services"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-center">
            Our LTL and TL Trucking Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">less than truckload (LTL) and full truckload shipping</Link> throughout Florida. <Link href="/rates" className="text-blue-600 hover:text-blue-800 font-medium">View our competitive rates</Link> or <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">request a custom quote</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title={serviceDescriptions.ltl.title}
              description={serviceDescriptions.ltl.description}
              features={serviceDescriptions.ltl.features}
            />
            <ServiceCard
              title={serviceDescriptions.tl.title}
              description={serviceDescriptions.tl.description}
              features={serviceDescriptions.tl.features}
            />
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-center">
          LTL Shipping Coverage Across Florida
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Our <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">LTL and TL trucking services</Link> cover all major Florida cities from our Orlando hub. See detailed <Link href="/rates" className="text-blue-600 hover:text-blue-800 font-medium">shipping rates by destination</Link>.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start mb-3">
              <svg
                className="w-5 h-5 text-gray-900 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Northeast Florida</h3>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Jacksonville</li>
              <li>Daytona Beach</li>
              <li>St. Augustine</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start mb-3">
              <svg
                className="w-5 h-5 text-gray-900 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Central Florida</h3>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Orlando</li>
              <li>Tampa</li>
              <li>Melbourne</li>
              <li>Ocala</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start mb-3">
              <svg
                className="w-5 h-5 text-gray-900 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Southwest Florida</h3>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Ft. Myers</li>
              <li>Naples</li>
              <li>Sarasota</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start mb-3">
              <svg
                className="w-5 h-5 text-gray-900 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Southeast Florida</h3>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Miami</li>
              <li>Ft. Lauderdale</li>
              <li>West Palm Beach</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
          Why Choose {companyInfo.name}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {companyInfo.experience} years of reliable service with consistent on-time delivery
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fully Insured</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Comprehensive cargo insurance for peace of mind upon request
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Round-the-clock customer service and dispatch
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Best rates without compromising quality service
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FAQSection faqs={homeFAQs} />
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(homeFAQs)) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl }
          ])) 
        }}
      />

      {/* Contact Section with Premium Gradient */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fast Response
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Get a Quote Today
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Contact us for a customized shipping solution that meets your specific needs and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Office</div>
                    <div className="text-gray-300 text-sm">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

