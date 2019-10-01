// Core
const merge = require("webpack-merge");

// Instruments
const chalk = require("chalk");
const { BUILD, CHUNK_NAME_JS } = require("../constants");
const { loadJavaScript } = require("../modules/javascript");
const {
  loadImages,
  loadFonts,
  connectHTML,
  loadSvgForCSS,
  loadSvgForJS
} = require("../modules/assets");
const { defineEnvVariables } = require("../modules/utils");

module.exports = () => {
  console.log(chalk.cyanBright("< ---- Common webpack config"));
  const { NODE_ENV } = process.env;
  const IS_DEVELOPMENT = NODE_ENV === "development";

  return merge({
    output: {
      path: BUILD,
      filename: IS_DEVELOPMENT ? "[name].js" : `./js/${CHUNK_NAME_JS}`,
      chunkFilename: IS_DEVELOPMENT ? "[name].js" : `./js/${CHUNK_NAME_JS}`,
      hashDigestLength: 5
      // filename: "./js/bundle.js"
    },
    module: {
      rules: [
        loadJavaScript(),
        loadFonts(),
        loadImages(),
        loadSvgForCSS(),
        loadSvgForJS()
      ]
    },
    plugins: [
      connectHTML(),
      defineEnvVariables({
        __ENV__: JSON.stringify(NODE_ENV),
        __DEV__: NODE_ENV === "development",
        __PROD__: NODE_ENV === "production"
      })
      // new HtmlWebpackPlugin({
      //   title: "Dashboard",
      //   template: "./static/template.html"
      // })
    ]
  });
};
