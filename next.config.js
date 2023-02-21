/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { appDir: true },
	async redirects() {
		return [
			{
				source: "/skyline",
				destination: "/api/skyline",
				permanent: true
			},
			{
				source: "/cxsmxs",
				destination: "https://cxsmxs.space/",
				permanent: true
			},
			{
				source: "/telegram",
				destination: "https://t.me/yurionblog",
				permanent: true
			},
			{
				source: "/discord",
				destination: "https://discord.gg/JkXFQpScFj",
				permanent: true
			}
		];
	},
	output: "standalone"
};

module.exports = nextConfig;
