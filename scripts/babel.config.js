module.exports = api => {
  console.log("bottom babel");
  api.cache.never();

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          debug: false,
          spec: true,
          loose: false,
          modules: "commonjs" // default
        }
      ]
    ]
  };
};
