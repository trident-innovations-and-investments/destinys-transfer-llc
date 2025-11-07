import Link from 'next/link';
import Image from 'next/image';
import { companyInfo, serviceDescriptions } from '@/data/company';
import ServiceCard from '@/components/ServiceCard';

/**
 * Home page with hero section, company overview, and service highlights
 * Styled to match template.html design
 */
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Reliable LTL & TL Shipping Services
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professional freight solutions across major routes. Competitive rates, on-time delivery, and exceptional service for all your shipping needs. {companyInfo.experience} years of safe driving experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors text-center"
              >
                Request Quote
              </Link>
              <Link
                href="/rates"
                className="px-6 py-3 border border-gray-300 text-gray-900 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors text-center"
              >
                View Rates
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?_gl=1*18xlv3y*_ga*MTk3NTk2NTA0MS4xNzYyNDc3MDM5*_ga_8JE65Q40S6*czE3NjI0NzcwMzkkbzEkZzEkdDE3NjI0NzgyOTkkajQzJGwwJGgw"
              alt="Truck on highway"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
            Our Services
          </h2>
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
          Service Locations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide comprehensive coverage across major shipping corridors and regional routes from Orlando, FL
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
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
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
              Comprehensive cargo insurance for peace of mind
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

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Get a Quote Today
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Contact us for a customized shipping solution that meets your specific needs and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
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
                  <div>
                    <div className="font-medium">Phone</div>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
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
                  <div>
                    <div className="font-medium">Email</div>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-400 text-sm hover:text-white transition-colors break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
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
                    <div className="font-medium">Office</div>
                    <div className="text-gray-400 text-sm">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 backdrop-blur-sm"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-200">
                    Service Type <span className="text-red-400">*</span>
                  </label>
                  <select 
                    id="service"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 appearance-none cursor-pointer backdrop-blur-sm"
                  >
                    <option value="">Select a service...</option>
                    <option value="ltl">LTL Shipping</option>
                    <option value="tl">TL Shipping</option>
                    <option value="both">Both Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-200">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 resize-none backdrop-blur-sm"
                    placeholder="Tell us about your shipping needs, including pickup/delivery locations, cargo details, and timing..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

