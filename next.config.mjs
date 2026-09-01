/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
      ],
    },
    {
      source: '/_next/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
  redirects: async () => [
    {
      source: '/favicon.ico',
      destination: '/icon.png',
      permanent: true,
    },
    {
      source: '/images/how-clean-my-speaker-works-infographic.jpg',
      destination: '/images/how-to-clean-my-speaker-fix-sound.jpg',
      permanent: true,
    },
    {
      source: '/images/benefits-of-clean-my-speaker-infographic.jpg',
      destination: '/images/clean-my-speaker-fix-my-speaker-benefits.jpg',
      permanent: true,
    },
    {
      source: '/images/how-sound-frequencies-work-infographic.jpg',
      destination: '/images/fix-my-speaker-sound-frequencies-guide.jpg',
      permanent: true,
    },
  ],
};

export default nextConfig;
