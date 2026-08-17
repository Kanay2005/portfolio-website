import type { NextConfig } from "next";

// GitHub Pages serves this site from https://<user>.github.io/portfolio-website,
// so every asset needs that prefix in production. The CI workflow sets
// NEXT_PUBLIC_BASE_PATH; locally it is empty and the site runs at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages has no Node runtime.
  output: "export",
  basePath,
  // The export target cannot run Next's image optimizer.
  images: { unoptimized: true },
  // Don't write AGENTS.md / CLAUDE.md into the repo on `next dev`.
  agentRules: false,
};

export default nextConfig;
