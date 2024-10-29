/** @type {import('next').NextConfig} */


function defineNextConfig(config) {
    return config
}


export default defineNextConfig({
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["image.tmdb.org"],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        appDir: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/movies",
                permanent: false,
            },
        ];
    },
    webpack(config) {

        config.module.rules.push(
            {
                test: /\.svg$/,
                use: [{ loader: "@svgr/webpack", options: { icon: true } }],
            }
        );

        return config;
    }

})


