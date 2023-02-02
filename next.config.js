/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
  env: {
    MOVIE_DB_API_KEY: process.env.MOVIE_DB_API_KEY,
    BASE_EXTERNAL_URL: process.env.BASE_EXTERNAL_URL,
    BASE_LITEFLIX_API_URL: process.env.BASE_LITEFLIX_API_URL,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  }
};

module.exports = nextConfig;
