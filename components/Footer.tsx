import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { formatPhone, formatAddress } from '@/lib/utils';
import BrandLogo from '@/components/BrandLogo';

/**
 * Footer component with contact information and licensing notice
 * Styled to match template.html design and surfaces brand logo for consistency
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <BrandLogo width={128} height={128} className="h-32 w-auto mb-6" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Professional freight and logistics solutions you can trust.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services" className="hover:text-gray-900 transition-colors">
                  LTL Shipping
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 transition-colors">
                  TL Shipping
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 transition-colors">
                  Short Haul
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 transition-colors">
                  Hot Shot
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-medium">Owner:</span> {companyInfo.owner}
              </li>
              <li>
                <span className="font-medium">Phone:</span>{' '}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-gray-900 transition-colors"
                >
                  {formatPhone(companyInfo.phone)}
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-gray-900 transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-medium">Address:</span>{' '}
                {formatAddress(companyInfo.address)}
              </li>
              <li className="pt-2">
                <span className="font-medium">Licensed & Insurance upon request</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-600 text-sm">
              {companyInfo.experience} Years Experience
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

