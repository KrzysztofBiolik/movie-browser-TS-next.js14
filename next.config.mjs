/** @type {import('next').NextConfig} */


function defineNextConfig(config) {
    return config
}


export default defineNextConfig({
    compiler: {
        styledComponents: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        appDir: true,
    },
    images: {
        domains: ["image.tmdb.org"],
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
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg")
        );

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/,
                use: [{ loader: "@svgr/webpack", options: { icon: true } }],
            }
        );

        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    }

})


