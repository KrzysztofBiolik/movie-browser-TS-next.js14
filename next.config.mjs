/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: "/",
                destination: "/movies",
                permanent: false,
            },
        ];
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    }
};

export default nextConfig;
