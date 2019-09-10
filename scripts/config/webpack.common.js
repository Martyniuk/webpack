// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

// Instruments
const { BUILD } = require("../constants");
const { loadJavaScript } = require("../modules/javascript");
const { loadCSS } = require("../modules/css");

module.exports = () => {
  return merge({
    output: {
      path: BUILD,
      filename: "bundle.js"
    },
    devtool: false,
    module: {
      rules: [loadJavaScript(), loadCSS()]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Dashboard",
        template: "./static/template.html"
      })
    ]
  });
};
