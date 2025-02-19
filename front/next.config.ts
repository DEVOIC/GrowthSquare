import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  /* config options here */
  images: {
    remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        
      ],
},};

export default nextConfig;
