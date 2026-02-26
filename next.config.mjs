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
  },
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
  distDir: 'build',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/opengraph-image.png',
        destination: '/api/og',
      },
      {
        source: '/:page/opengraph-image.png',
        destination: '/api/og/:page',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
