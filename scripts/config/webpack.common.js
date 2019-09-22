// Core
const merge = require("webpack-merge");

// Instruments
const chalk = require("chalk");
const { BUILD } = require("../constants");
const { loadJavaScript } = require("../modules/javascript");
const { loadCSS } = require("../modules/css");
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

  return merge({
    output: {
      path: BUILD,
      filename: "./js/bundle.js"
    },
    module: {
      rules: [
        loadJavaScript(),
        loadCSS(),
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
