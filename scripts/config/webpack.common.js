// Core
const merge = require("webpack-merge");

// Instruments
const { BUILD } = require("../constants");
const { loadJavaScript } = require("../modules/javascript");
const { loadCSS } = require("../modules/css");
const { loadFonts, connectHTML } = require("../modules/assets");

module.exports = () => {
  return merge({
    output: {
      path: BUILD,
      filename: "./js/bundle.js"
    },
    module: {
      rules: [loadJavaScript(), loadCSS(), loadFonts()]
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
