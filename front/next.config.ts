import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
},

async rewrites() {
  return [
    {
      source: "/api/:path*", // Proxy all requests starting with /api
      destination: `${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/:path*`, // Proxy to backend
    },
  ];
},
};
export default nextConfig;
