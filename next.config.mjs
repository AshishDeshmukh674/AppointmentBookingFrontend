/** @type {import('next').NextConfig} */
const nextConfig = {
    
    reactStrictMode:false,
    images:{
        domains:['res.cloudinary.com','lh3.googleusercontent.com']
    },
    env: {
        KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
        KINDE_DOMAIN: process.env.KINDE_DOMAIN,
        KINDE_SECRET: process.env.KINDE_SECRET,
      }
};

export default nextConfig;
