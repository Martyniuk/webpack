// Core
const merge = require("webpack-merge");

// Instruments
const { SOURCE } = require("../constants");
const getCommonConfig = require("./webpack.common");
const { cleanBuildDirectory } = require("../modules/utils");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "development", // interim for testing purpose
    entry: SOURCE,
    devtool: false,
    plugins: [cleanBuildDirectory()]
  });
};
