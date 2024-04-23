import { hostname } from 'os';

const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: ''
        }]
    },
    experimental: {
        serverComponents: true, // Enable Server Components
        serverComponentsMiddleware: true, // Enable Middleware for Server Components
    },
};

export default nextConfig;


