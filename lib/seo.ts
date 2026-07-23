/** Site-wide SEO constants and structured data for trycanvas.app */

export const siteUrl = 'https://trycanvas.app'

export const siteName = 'Canvas'

export const siteTitle = 'Canvas — Publishing on your own terms'

/** Primary meta description (SERP). Keep under ~160 chars where practical. */
export const siteDescription =
  'Canvas is a powerful tool for Laravel apps that makes it easy to write, edit, and brand your work with a range of publishing tools.'

/**
 * Shorter card copy for Open Graph / Twitter (link previews prefer ~100–120 chars).
 * Aligned with the product: own auth, own domain, admin at /canvas.
 */
export const socialDescription =
  'Open-source publishing for Laravel. Your auth, your domain, a quiet admin at /canvas.'

export const siteKeywords = [
  'Laravel',
  'Laravel CMS',
  'Laravel blog',
  'publishing platform',
  'open source',
  'Canvas Laravel',
  'austintoddj/canvas',
  'Tiptap',
  'self-hosted blog',
  'PHP publishing'
] as const

export const socialImage = {
  url: '/social.png',
  width: 2400,
  height: 1256,
  alt: 'Canvas — open-source publishing platform for Laravel apps, with a calm admin and modern editor',
  type: 'image/png' as const
}

export const creator = {
  name: 'Todd Austin',
  x: '@austintoddj',
  xUrl: 'https://x.com/austintoddj',
  githubUrl: 'https://github.com/austintoddj/canvas'
} as const

export const productLinks = {
  github: 'https://github.com/austintoddj/canvas',
  packagist: 'https://packagist.org/packages/austintoddj/canvas',
  license: 'https://github.com/austintoddj/canvas/blob/v7/license',
  discussions: 'https://github.com/austintoddj/canvas/discussions',
  productHunt: 'https://www.producthunt.com/products/canvas',
  laravelNews: 'https://laravel-news.com/canvas-a-laravel-publishing-platform'
} as const

const absoluteSocialImage = `${siteUrl}${socialImage.url}`

/**
 * JSON-LD graph: WebSite + Organization + SoftwareApplication + SoftwareSourceCode.
 * Absolute URLs only — required by Google rich-result parsers.
 */
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      'url': siteUrl,
      'name': siteName,
      'description': siteDescription,
      'inLanguage': 'en-US',
      'publisher': { '@id': `${siteUrl}/#organization` },
      'image': absoluteSocialImage
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      'name': siteName,
      'url': siteUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/apple-touch-icon.png`
      },
      'sameAs': [
        productLinks.github,
        productLinks.packagist,
        creator.xUrl,
        productLinks.productHunt
      ]
    },
    {
      '@type': ['SoftwareApplication', 'SoftwareSourceCode'],
      '@id': `${siteUrl}/#software`,
      'name': siteName,
      'description': siteDescription,
      'url': siteUrl,
      'image': absoluteSocialImage,
      'applicationCategory': 'DeveloperApplication',
      'applicationSubCategory': 'Content management system',
      'operatingSystem': 'Cross-platform (PHP / Laravel)',
      'runtimePlatform': 'Laravel',
      'programmingLanguage': ['PHP', 'TypeScript', 'JavaScript'],
      'codeRepository': productLinks.github,
      'downloadUrl': productLinks.packagist,
      'installUrl': `${siteUrl}/#install`,
      'license': productLinks.license,
      'isAccessibleForFree': true,
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'author': {
        '@type': 'Person',
        'name': creator.name,
        'url': creator.xUrl,
        'sameAs': [creator.xUrl, productLinks.github]
      },
      'publisher': { '@id': `${siteUrl}/#organization` }
    }
  ]
} as const

/** Safe serialization for inline JSON-LD script tags. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
