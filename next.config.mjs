/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.keralam.me",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
