import { MetadataRoute } from 'next';

// Ensures the route is statically generated for export builds
export const dynamic = 'force-static';

/**
 * Robots.txt generation for SEO
 * Controls search engine crawling behavior
 * Follows 2025 SEO best practices
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://destinystransfer.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

