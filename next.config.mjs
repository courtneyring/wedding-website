/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: ['172.16.184.120'],
  images: {
    unoptimized: true
  }
};

export default nextConfig;
