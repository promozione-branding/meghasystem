// /** @type {import('next').NextConfig} */
// const nextConfig = {
//      reactStrictMode: true,
//   images: {
//     domains: ['cdn.sanity.io'],
//   },
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    localPatterns: [
      {
        pathname: "/**", 
        search: "",
      },
    ],
  },
};

export default nextConfig;
