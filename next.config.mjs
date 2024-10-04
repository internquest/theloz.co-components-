/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'theloz.co',
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
