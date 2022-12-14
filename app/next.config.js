/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    API_URL: process.env.API_URL,
    CLEARING_HOUSE: process.env.CLEARING_HOUSE,
    USDC: process.env.USDC,
    LIQ_FEE_RATIO: process.env.LIQ_FEE_RATIO,
    TRANS_FEE_RATIO: process.env.TRANS_FEE_RATIO,
  },
  pwa: {
    dest: "public",
    skipWaiting: true, // Turn this to false once you're ready to deploy a banner to develop update prompt.
    mode: process.env.NODE_ENV === "production" ? "production" : "development", // This will create worker-box production build.
    disable: process.env.NODE_ENV === "development", // This is to disable the annoying workbox log tsunami during develompment.
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPWA(nextConfig);
