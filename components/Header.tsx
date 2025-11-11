'use client';

import Link from 'next/link';
import { useState } from 'react';
import { companyInfo } from '@/data/company';
import BrandLogo from '@/components/BrandLogo';

/**
 * Navigation header component with company branding
 * Includes mobile-responsive hamburger menu
 * Styled to match template.html design and shows the logo asset
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <BrandLogo width={64} height={64} className="h-16 w-auto" priority />
            <span className="ml-4 text-base font-medium text-gray-900">
              {companyInfo.name}
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/rates"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Rates
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/services"
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/rates"
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rates
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

