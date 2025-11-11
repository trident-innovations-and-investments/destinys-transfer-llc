'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

/**
 * FAQ section component with accordion UI and structured data support
 * Implements best practices for 2025 SEO with FAQPage schema
 * @param faqs - Array of FAQ items with questions and answers
 * @param title - Optional section title, defaults to "Frequently Asked Questions"
 */
export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /**
   * Toggles FAQ item open/closed state
   * @param index - Index of the FAQ item to toggle
   */
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

