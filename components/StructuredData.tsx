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
    image: `${siteUrl}/DT_logo.png`,
    logo: `${siteUrl}/DT_logo.png`,
    description: `${companyInfo.name} provides professional LTL and TL trucking services to and from Orlando, Florida. Specializing in less than truckload and truckload shipping to Orlando and from Orlando across Florida with ${companyInfo.experience} years of safe driving experience. Licensed and insured carrier serving bidirectional routes between Orlando, Tampa, Miami, Jacksonville, and all major Florida cities.`,
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
    areaServed: [
      {
        '@type': 'State',
        name: 'Florida',
      },
      {
        '@type': 'City',
        name: 'Orlando',
      },
      {
        '@type': 'City',
        name: 'Tampa',
      },
      {
        '@type': 'City',
        name: 'Miami',
      },
      {
        '@type': 'City',
        name: 'Jacksonville',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Trucking Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LTL Shipping Services Orlando',
            description: 'Less than truckload shipping services across Florida',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TL Shipping Services Orlando',
            description: 'Full truckload shipping services across Florida',
          },
        },
      ],
    },
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
    logo: `${siteUrl}/DT_logo.png`,
    foundingDate: String(new Date().getFullYear() - companyInfo.experience),
    description: `Professional LTL and TL trucking company serving Orlando and all of Florida with ${companyInfo.experience} years of experience`,
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

