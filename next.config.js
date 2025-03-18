/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'i0.wp.com'
		},
		{
		  protocol: 'https',
		  hostname: 'play.google.com'
		},
		{
		  protocol: 'https',
		  hostname: 'developer.apple.com'
		},
	  ],
	},
  }
