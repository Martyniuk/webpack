// Core
const merge = require("webpack-merge");

// Instruments
const { SOURCE } = require("../constants");
const getCommonConfig = require("./webpack.common");
const {
  cleanBuildDirectory,
  connectBundleAnalyzer
} = require("../modules/utils");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production", // development interim for testing purpose
    entry: SOURCE,
    devtool: false,
    plugins: [cleanBuildDirectory(), connectBundleAnalyzer()]
  });
};
