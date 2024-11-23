import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true, // Оптимизация SVG
            titleProp: true, // Поддержка title
            ref: true, // Поддержка рефов
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;