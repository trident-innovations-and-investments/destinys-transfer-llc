import type { Metadata } from 'next';
import Image from 'next/image';
import { companyInfo } from '@/data/company';
import { formatPhone, formatAddress } from '@/lib/utils';
import ContactForm from '@/components/ContactForm';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

/**
 * Contact page metadata for SEO
 * Optimized for contact and location searches
 */
export const metadata: Metadata = {
  title: 'Contact Us - Get a Shipping Quote | Orlando, FL',
  description: `Contact ${companyInfo.name} for reliable shipping and cargo transfer services. ${companyInfo.experience} years of experience. Licensed and insured. Located in Orlando, FL. Phone: ${companyInfo.phone}. Get a custom quote today.`,
  keywords: [
    'contact shipping company Orlando',
    'shipping quote Florida',
    'freight services contact',
    'trucking company Orlando',
    'cargo transfer contact',
    'shipping services phone number',
  ],
  openGraph: {
    title: 'Contact Us - Get a Shipping Quote | Orlando, FL',
    description: `Contact ${companyInfo.name} for reliable shipping and cargo transfer services. ${companyInfo.experience} years of experience.`,
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/main-hero-image.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Contact Shipping Services',
      },
    ],
  },
  twitter: {
    title: 'Contact Us - Get a Shipping Quote | Orlando, FL',
    description: `Contact ${companyInfo.name} for reliable shipping and cargo transfer services. ${companyInfo.experience} years of experience.`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

/**
 * Contact page with company information and contact details
 * Styled to match template.html design
 */
export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with {companyInfo.name} for reliable shipping and
            cargo transfer services. We&apos;re here to help with your shipping
            and transfer needs.
          </p>
        </div>
      </section>

      {/* Business Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Business Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600">
                  {companyInfo.experience} years of safe driving experience
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Equipment</h3>
                <ul className="space-y-2">
                  {companyInfo.equipment && companyInfo.equipment.length > 0 ? (
                    companyInfo.equipment.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <svg
                          className="w-5 h-5 text-gray-900 mr-2 mt-0.5 flex-shrink-0"
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
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                <ul className="space-y-2">
                  {companyInfo.services && companyInfo.services.length > 0 ? (
                    companyInfo.services.map((service, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <svg
                          className="w-5 h-5 text-gray-900 mr-2 mt-0.5 flex-shrink-0"
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
                        <span>{service}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 text-sm">No services listed</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-600"
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
              Licensed & Insured
            </h2>
            <p className="text-gray-600 mb-6">
              {companyInfo.name} is fully licensed and insured. Documentation is
              available upon request for your peace of mind.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-green-600"
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
                <span className="font-semibold text-gray-900">Licensed</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-green-600"
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
                <span className="font-semibold text-gray-900">Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Get a Quote Today
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Contact us for a customized shipping solution that meets your specific
                needs and budget.
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">Owner/Operator</div>
                    <div className="text-gray-400 text-sm">{companyInfo.owner}</div>
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {formatPhone(companyInfo.phone)}
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
                      {formatAddress(companyInfo.address)}
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
