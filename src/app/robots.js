module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/',
  generateRobotsTxt: true, 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  },
};
