/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set custom build output directory
    distDir: 'dist',
  
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Enable production source maps (optional for debugging production builds)
    productionBrowserSourceMaps: true,
  
    // Add environment variables (Optional)
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
  
  export default nextConfig;
  