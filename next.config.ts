import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: '/th/id/**',
      },
    ],
  },
  serverExternalPackages: ['knex'],
};

export default nextConfig;
