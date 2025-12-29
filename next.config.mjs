/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3845",
        pathname: "/assets/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3845",
        pathname: "/assets/**",
      },
      {
        protocol: "http",
        hostname: "::1",
        port: "3845",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
