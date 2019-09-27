// Core
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = require("postcss-preset-env");
const fontMagician = require("postcss-font-magician");
const cssnano = require("cssnano");
// Instrumets
const chalk = require("chalk");

// BELOW IS INITIAL VERSION OF loadCSS and is DEPRECATED!!!
const __DEPRECATED__loadCSS = () => {
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

const loadPostCSS = (
  { sourceMap = false, minimize = false } = {
    sourceMap: false,
    minimize: false
  }
) => {
  console.log(chalk.greenBright("< \t << ---- PostCSS loader in loadCSS"));

  const plugins = [
    env({
      stage: 0
    }), // first
    fontMagician({
      protocol: "https:" // second -- what it does? - generates fontface automaticaly, magic?
    })
  ];

  if (minimize) {
    const cssnanoOptions = {
      preset: [
        "default",
        {
          normalizeUrl: false
        }
      ]
    };
    // plugins.push(cssnano()); // third
    plugins.push(cssnano(cssnanoOptions)); // third
  }

  return {
    loader: "postcss-loader",
    options: {
      plugins,
      sourceMap
    }
  };
};

const loadCSS = ({ sourceMap = false } = { sourceMap: false }) => {
  console.log(chalk.blueBright("< \t << ---- CSS loader in loadCSS"));

  return {
    loader: "css-loader",
    options: {
      importLoaders: 1,
      modules: {
        localIdentName: "[path][name]__[local]--[hash:base64:5]"
      },
      sourceMap
    }
  };
};

exports.loadDevCSS = () => {
  console.log(chalk.blueBright("< ---- CSS Loaded"));

  return {
    test: /\.css$/,
    use: [
      "style-loader",
      loadCSS({ sourceMap: true }), // css-loader
      loadPostCSS({ sourceMap: true, minimize: false }) // postcss-loader
    ]
  };
};

exports.loadProdCSS = () => {
  console.log(chalk.blueBright("< ---- CSS Loaded"));

  return {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      "cache-loader",
      loadCSS({ sourceMap: false }), // css-loader
      loadPostCSS({ sourceMap: false, minimize: true }) // postcss-loader
    ]
  };
};

/* ----------------------------- PLUGINS ------------------------------------*/
exports.connectMiniCssExtractPlugin = () => {
  return new MiniCssExtractPlugin({
    filename: "css/styles.css"
    // chunkFilename: "css/style.css"
  });
};
