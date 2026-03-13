import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  experimental: {
    // Tree-shake large icon/utility packages — only import what's used
    optimizePackageImports: ["lucide-react", "gsap"],
  },
  images: {
    remotePatterns: [
      {
        // Homefield Marketing WordPress CDN
        protocol: "https",
        hostname: "homefieldmarketing-v1770048921.websitepro-cdn.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        // Homefield Marketing WordPress origin (some project images)
        protocol: "https",
        hostname: "homefieldmarketing.ca",
        pathname: "/wp-content/uploads/**",
      },
      {
        // placehold.co fallback images
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    // Serve modern formats (avif, webp) for compatible browsers
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
