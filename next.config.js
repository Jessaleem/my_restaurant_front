/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:[configs.NEXT_STRAPI_URL],
  },
}

module.exports = nextConfig
