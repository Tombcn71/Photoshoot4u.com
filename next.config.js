/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  outputFileTracing: true,
};

module.exports = nextConfig;
