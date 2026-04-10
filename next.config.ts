import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ourahealth.imgix.net",
      },
    ],
  },
};

export default nextConfig;
