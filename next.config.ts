// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "drive.google.com","lh3.googleusercontent.com"  ], // 👈 add more domains here if needed
  },
};


export default nextConfig;
