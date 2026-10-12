import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Requerido para la exportación estática con etiquetas <img>
  },
};

export default nextConfig;