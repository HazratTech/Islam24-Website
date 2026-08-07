import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.BACKEND_PROXY_URL || "https://api.islam24.app"}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
