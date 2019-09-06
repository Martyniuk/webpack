module.exports = api => {
  // cache babel config
  const env = api.env();
  // api.cache.using(() => env === 'development');
  api.cache.never();

  const plugins = ["@babel/plugin-proposal-class-properties"];
  if (env === "development") {
    plugins.push("react-hot-loader/babel");
  }

  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          spec: true,
          loose: false
          // debug: false
          // modules: false,
        }
      ]
    ],
    plugins
  };
};
