/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},       // empty object instead of `true`
    cacheComponents: true,   // replaces `ppr: 'incremental'`
  },
};

module.exports = nextConfig;
