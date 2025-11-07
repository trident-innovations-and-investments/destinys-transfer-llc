import Link from 'next/link';
import { companyInfo, serviceDescriptions } from '@/data/company';
import ServiceCard from '@/components/ServiceCard';

/**
 * Services page detailing all available trucking services
 * Styled to match template.html design
 */
export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Shipping & Transfer Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {companyInfo.name} offers comprehensive shipping and cargo transfer
            services tailored to your business needs.
          </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Trailer</h3>
            <ul className="space-y-3 text-gray-700">
              {companyInfo.equipment.map((item, index) => (
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
              ))}
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
                <span>Inside delivery up to 20 feet</span>
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

      {/* Call to Action */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-4">
              Need More Information?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your shipping and transfer needs and get a
              customized quote.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us for a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
