// Core
const merge = require("webpack-merge");

// Instruments
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

module.exports = () => {
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
      connectHTML()
      // new HtmlWebpackPlugin({
      //   title: "Dashboard",
      //   template: "./static/template.html"
      // })
    ]
  });
};
