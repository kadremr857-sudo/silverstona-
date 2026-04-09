import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TypeScript hataları olsa bile build işlemini durdurma
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint hatalarını build sırasında görmezden gel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
