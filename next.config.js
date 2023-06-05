/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config
  }
}

module.exports = nextConfig
