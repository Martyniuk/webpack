// Core
const env = require("postcss-preset-env");
const fontMagician = require("postcss-font-magician");
// Instrumets
const chalk = require("chalk");

exports.loadCSS = () => {
  console.log(chalk.blueBright("< ---- CSS Loaded"));

  return {
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]"
          }
        }
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [
            env({
              stage: 0
            }),
            fontMagician({
              protocol: "https:" // what it does? - generates fontface automaticaly, magic?
            })
          ]
        }
      }
    ]
  };
};
