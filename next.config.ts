import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kenenti.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
