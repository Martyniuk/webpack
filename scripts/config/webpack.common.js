// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = require("postcss-preset-env");

// Instruments
const { BUILD } = require("../constants");

module.exports = () => {
  return {
    output: {
      path: BUILD,
      filename: "bundle.js"
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              compact: false
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  env({
                    stage: 0
                  })
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Dashboard",
        template: "./static/template.html"
      })
    ]
  };
};
