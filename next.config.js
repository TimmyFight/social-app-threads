/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: [
      'img.clerk.com',
      'images.clerk.dev',
      'uploadthing.com',
      'placehold.co',
    ],
  },
};

module.exports = nextConfig;
