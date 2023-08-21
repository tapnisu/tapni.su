/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
        source: "/telegram",
        destination: "https://t.me/tapnisu",
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
        destination: "mailto:Aleksey.rybin@gmail.com",
        permanent: true,
      },
      {
        source: "/c",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
