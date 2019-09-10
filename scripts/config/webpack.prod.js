// Core
const merge = require("webpack-merge");

// Instruments
const { SOURCE } = require("../constants");
const getCommonConfig = require("./webpack.common");
const { cleanBuildDirectory } = require("../modules/utils");

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "production",
    entry: SOURCE,
    plugins: [cleanBuildDirectory()]
  });
};
