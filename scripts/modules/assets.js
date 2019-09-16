// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Instrumets
const chalk = require("chalk");
const { STATIC } = require("../constants");

exports.loadFonts = () => {
  console.log(chalk.red("< ---- Fonts Loaded"));

  return {
    test: /\.woff2$/,
    use: [
      {
        loader: "file-loader", // basically hust moves files to below described in "options"
        options: {
          //   name: `./fonst/${CHUNK_NAME_ASSET}` // where to put your files
          name: "./fonst/[name].[ext]"
        }
      }
    ]
  };
};

exports.connectHTML = () => {
  return new HtmlWebpackPlugin({
    title: "Webpack",
    template: `${STATIC}/template.html`
  });
};
