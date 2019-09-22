// Core
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
// Instrumets
const chalk = require("chalk");

exports.cleanBuildDirectory = () => {
  console.log(chalk.redBright("< ---- Build Directory Cleaned"));
  return new CleanWebpackPlugin();
};

exports.defineEnvVariables = (variables = {}) => {
  console.log(chalk.magentaBright("< ---- Define Environment Variables"));
  return new DefinePlugin(variables);
};
