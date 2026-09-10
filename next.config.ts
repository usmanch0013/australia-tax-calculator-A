import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aussalaryaftertax.com" }],
        destination: "https://aussalaryaftertax.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
