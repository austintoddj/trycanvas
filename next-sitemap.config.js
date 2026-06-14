/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://trycanvas.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/_*']
      }
    ],
    additionalSitemaps: []
  },
  changefreq: 'monthly',
  priority: 1.0
}

module.exports = config
