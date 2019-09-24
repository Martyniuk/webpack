// Core
const merge = require("webpack-merge");

// Instruments
const { SOURCE } = require("../constants");
const getCommonConfig = require("./webpack.common");
const {
  cleanBuildDirectory,
  connectBundleAnalyzer
} = require("../modules/utils");
const { optimizeModules } = require("../modules/optimization");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "none", // none interim for testing purpose
    entry: SOURCE,
    optimization: optimizeModules(),
    devtool: false,
    plugins: [cleanBuildDirectory(), connectBundleAnalyzer()]
  });
};
