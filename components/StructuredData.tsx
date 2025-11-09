import { companyInfo } from '@/data/company';

/**
 * Structured Data (JSON-LD) component for SEO
 * Implements LocalBusiness schema and Service schemas per 2025 SEO best practices
 * 
 * @returns JSON-LD script tags with structured data
 */
export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';
  
  // LocalBusiness schema for better local SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: companyInfo.name,
    image: `${siteUrl}/main-hero-image.jpeg`,
    description: `${companyInfo.name} provides professional shipping and cargo transfer services including truckload (TL) and less than truckload (LTL). ${companyInfo.experience} years of safe driving experience.`,
    url: siteUrl,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5383',
      longitude: '-81.3792',
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
    sameAs: [
      // Add social media profiles when available
    ],
  };

  // Service schemas for each service type
  const serviceSchemas = companyInfo.services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service,
    provider: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    description: `${service} shipping and transfer services provided by ${companyInfo.name}. Professional, reliable, and insured.`,
  }));

  // Organization schema for entity-first SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    legalName: companyInfo.name,
    url: siteUrl,
    logo: `${siteUrl}/main-hero-image.jpeg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.zip,
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

