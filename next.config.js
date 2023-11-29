/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/get-started",
				destination: "/auth/get-started",
				permanent: true,
			},
			{
				source: "/sign-in",
				destination: "/auth/sign-in",
				permanent: true,
			},
			{
				source: "/sign-up",
				destination: "/auth/sign-up",
				permanent: true,
			},
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
			{
				source: "/app",
				destination: "/app/dashboard",
				permanent: true,
			},
			{
				source: "/app-business",
				destination: "/app/dashboard/business",
				permanent: true,
			},
			{
				source: "/app-artist",
				destination: "/app/dashboard/artist",
				permanent: true,
			},
			{
				source: "/settings",
				destination: "/app/settings",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
