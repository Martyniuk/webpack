// Core
const merge = require("webpack-merge");

// Instruments
const { SOURCE } = require("../constants");
const getCommonConfig = require("./webpack.common");
const {
  cleanBuildDirectory,
  connectBundleAnalyzer
} = require("../modules/utils");
const { optimizeModules, optimizeImages } = require("../modules/optimization");
const { loadProdCSS, connectMiniCssExtractPlugin } = require("../modules/css");

module.exports = () => {
  const { ANALYZE } = process.env;

  return merge(
    getCommonConfig(),
    {
      mode: "none", // none interim for testing purpose
      entry: SOURCE,
      optimization: optimizeModules(),
      devtool: false,
      module: {
        rules: [loadProdCSS()]
      },
      plugins: [
        cleanBuildDirectory(),
        connectMiniCssExtractPlugin(),
        optimizeImages()
      ]
    },
    ANALYZE && connectBundleAnalyzer()
  );
};
