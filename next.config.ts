import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lovely-flamingo-139.convex.cloud',
			},
			{
				protocol: 'https',
				hostname: 'fortunate-mouse-969.convex.cloud',
			},
		],
	},
}

export default nextConfig
