module.exports = (api) => {
    // cache babel config
    // const env = api.env();
    // api.cache.using(() => env === 'development');
    api.cache.never();

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    spec:  true,
                    loose: false,
                    debug: true,
                    // modules: false,
                }
            ]
        ],
        plugins: [ '@babel/plugin-proposal-class-properties' ]
    }
};
