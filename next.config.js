/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },

  async redirects() {
    return [
      {
        source: "/vk",
        destination: "https://vk.com/tapnisu",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/tapnisu",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/tapnisu",
        permanent: true,
      },
      {
        source: "/telegram",
        destination: "https://t.me/tapnisu",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://t.me/s/tapnisusbox",
        permanent: true,
      },
      {
        source: "/telegram-channel",
        destination: "https://t.me/s/tapnisusbox",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/users/586128640136445964",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/tapnisu",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:0xalekseirybin@gmail.com",
        permanent: true,
      },
      {
        source: "/c",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/domains",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
