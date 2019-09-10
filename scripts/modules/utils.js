// Core
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Instrumets
const chalk = require("chalk");

exports.cleanBuildDirectory = () => {
  console.log(chalk.redBright("< ---- Build Directory Cleaned"));
  return new CleanWebpackPlugin();
};
