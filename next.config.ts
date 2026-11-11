import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static site served from https://arleznic.github.io/aboutMe/.
// Without it, the app builds as before (standalone server, served from "/").
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/aboutMe" : "";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath,
      // GitHub Pages has no image server, so images are served as-is.
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {
      output: "standalone",
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    };

export default nextConfig;
