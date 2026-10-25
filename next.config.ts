import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Lets the dev server be opened from 127.0.0.1 or another device on the network, not only localhost.
  allowedDevOrigins: ['127.0.0.1', '192.168.10.11'],
}

export default nextConfig
