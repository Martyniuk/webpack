// Instruments
const chalk = require("chalk");

exports.loadJavaScript = () => {
  console.log(chalk.greenBright("< ---- JavaScript Loaded"));

  return {
    test: /\.js$/,
    use: {
      loader: "babel-loader",
      options: {
        compact: false
      }
    }
  };
};
