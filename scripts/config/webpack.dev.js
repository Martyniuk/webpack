// Core
const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");
const { choosePort } = require("react-dev-utils/WebpackDevServerUtils");
// Instruments
const { SOURCE, HOST, PORT } = require("../constants");
const getCommonConfig = require("./webpack.common");
const { loadDevCSS } = require("../modules/css");

module.exports = async () => {
  const suggestedPort = await choosePort(HOST, PORT);

  return merge(getCommonConfig(), {
    mode: "development",
    entry: ["webpack-hot-middleware/client?reload=true&quiet=true", SOURCE],
    devtool: "eval-source-map",
    module: {
      rules: [loadDevCSS()]
    },
    devServer: {
      host: HOST,
      port: suggestedPort
    },
    plugins: [new HotModuleReplacementPlugin()]
  });
};
