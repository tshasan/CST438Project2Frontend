/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '/**',
            },
        ],
    },
    swcMinify: true,
    reactStrictMode: true, 
    compress: true, 
};

export default nextConfig;
