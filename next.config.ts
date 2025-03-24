import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  /* config options here */
};

export default nextConfig;
