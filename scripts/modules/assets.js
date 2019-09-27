// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Instrumets
const chalk = require("chalk");
const { STATIC } = require("../constants");

exports.loadSvgForJS = () => {
  console.log(chalk.green("< ---- SVGs for JS Loaded"));

  return {
    test: /\.svg$/,
    issuer: {
      test: /\.js$/
    },
    use: [
      "@svgr/webpack",
      {
        loader: "file-loader", // basically just moves files to below described in "options"
        options: {
          //   name: `./images/${CHUNK_NAME_ASSET}` // where to put your files
          name: "./images/[name].[ext]"
        }
      }
    ]
  };
};

exports.loadSvgForCSS = () => {
  console.log(chalk.greenBright("< ---- SVGs for CSS Loaded"));

  return {
    test: /\.svg$/,
    issuer: {
      test: /\.css$/
    },
    use: [
      {
        loader: "file-loader", // basically just moves files to below described in "options"
        options: {
          //   name: `./images/${CHUNK_NAME_ASSET}` // where to put your files
          name: "./images/[name].[ext]"
        }
      }
    ]
  };
};

exports.loadImages = () => {
  console.log(chalk.blue("< ---- Images Loaded"));

  return {
    test: /\.(png|jpg|jpeg)$/,
    use: [
      {
        loader: "file-loader", // basically just moves files to below described in "options"
        options: {
          //   name: `./images/${CHUNK_NAME_ASSET}` // where to put your files
          name: "./images/[name].[ext]"
        }
      }
    ]
  };
};

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
