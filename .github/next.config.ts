import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/o-extraordinario-do-cotidiano-arroios",
  assetPrefix: "/o-extraordinario-do-cotidiano-arroios",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
