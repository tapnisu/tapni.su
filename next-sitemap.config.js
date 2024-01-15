/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL ?? "https://tapni.su",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",

  transform: async (config, path) => {
    return {
      loc: path.replace(".en-US", ""),
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

module.exports = config;
