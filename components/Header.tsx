'use client';

import Link from 'next/link';
import { useState } from 'react';
import { companyInfo } from '@/data/company';

/**
 * Navigation header component with company branding
 * Includes mobile-responsive hamburger menu
 * Styled to match template.html design
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-semibold tracking-tight text-gray-900">
              {initials}
            </div>
            <span className="ml-2 text-base font-medium text-gray-900">
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

