/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['i.postimg.cc', 'www.bing.com', 'th.bing.com'],
	},
  env: {
    STRIPE_KEY: process.env.STRIPE_KEY
  }
};

module.exports = nextConfig;
