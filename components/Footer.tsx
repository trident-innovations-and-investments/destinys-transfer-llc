import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { formatPhone, formatAddress } from '@/lib/utils';

/**
 * Footer component with contact information and licensing notice
 * Styled to match template.html design
 */
export default function Footer() {
  /**
   * Safely extracts initials from company name
   * Handles edge cases like empty strings or single words
   */
  const getInitials = (): string => {
    if (!companyInfo.name || companyInfo.name.trim().length === 0) {
      return 'DT';
    }
    const words = companyInfo.name.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.length === 0) {
      return 'DT';
    }
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return words
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
              {initials}
            </div>
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

