// next.config.mjs
import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [],
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // Add any rewrites or redirects if needed
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: '/blog/:path*',
      },
    ];
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);