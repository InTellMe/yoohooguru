/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@yoohooguru/shared'],

  // Skip TypeScript and ESLint checks during production builds
  // Type checking is done separately in CI/CD pipeline
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Built-in optimization for production builds
  // This replaces the need for external minify plugins
  swcMinify: true,
  compress: true,

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Configure for gateway architecture
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked before pages/public files
        // The middleware will handle subdomain routing
        {
          source: "/api/backend/:path*",
          destination: process.env.BACKEND_API_URL 
            ? `${process.env.BACKEND_API_URL}/api/:path*`
            : "https://api.yoohoo.guru/api/:path*",
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // and before dynamic routes
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
      ],
    }
  },

  // Headers for cross-subdomain session preservation
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            // Allow credentials (cookies) to be sent cross-origin
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            // Expose subdomain headers to JavaScript
            key: 'Access-Control-Expose-Headers',
            value: 'x-subdomain, x-subdomain-category',
          },
        ],
      },
      {
        // API routes - allow CORS for subdomain switching
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'production' 
              ? 'https://*.yoohoo.guru'
              : '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, x-subdomain',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },

  // Support for environment variables per subdomain
  env: {
    NEXT_PUBLIC_SUBDOMAIN: process.env.NEXT_PUBLIC_SUBDOMAIN || 'www',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GTM_CONTAINER_ID: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
    NEXT_PUBLIC_VERCEL_ANALYTICS: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS || 'true',
    // Base domain for cookie sharing across subdomains
    NEXT_PUBLIC_COOKIE_DOMAIN: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || '.yoohoo.guru',
  },
}

module.exports = nextConfig