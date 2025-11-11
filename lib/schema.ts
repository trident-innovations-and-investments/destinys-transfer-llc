import { FAQItem } from '@/components/FAQSection';

/**
 * Generates FAQPage structured data for SEO
 * Can be used in server components for JSON-LD schema generation
 * @param faqs - Array of FAQ items
 * @returns Structured data object for FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList structured data for SEO navigation
 * Enhances site hierarchy understanding for search engines
 * @param items - Array of breadcrumb items with name and url
 * @returns Structured data object for BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

