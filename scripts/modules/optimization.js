// Instruments
const chalk = require("chalk");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// Instruments for Image optimization
const ImageminWebpackPlugin = require("imagemin-webpack");

exports.optimizeModules = () => {
  console.log(chalk.greenBright("< ---- Optimize Modules triggered"));

  return {
    minimize: false, // <-- Minification of JS
    minimizer: (() => {
      console.log(chalk.redBright("< ==== ExpeliANUS!")); // test purpose only
      return [
        new UglifyJsPlugin({
          cache: false,
          sourceMap: true,
          parallel: true,
          extractComments: true,
          uglifyOptions: {
            warnings: false,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_fnames: false
          }
        })
      ];
    })(), // <-- // ability to provide additional minimizer for code
    noEmitOnErrors: true, // <-- skip the emitting phase whenever there are errors while compiling
    removeEmptyChunks: true, // <-- detect and remove chunks which are empty
    mergeDuplicateChunks: true, // <-- merge chunks which contain the same modules
    removeAvailableModules: true, // <-- remove modules from chunks when these modules are already included in all parents
    flagIncludedChunks: true, // <-- determine and flag chunks which are subsets of other chunks in a
    // way that subsets don’t have to be loaded when the bigger chunk has been already loaded
    occurrenceOrder: true, // <-- figure out an order of modules which will result in the smallest initial bundle
    concatenateModules: true, // <--  find segments of the module graph which can be safely concatenated into a single module
    providedExports: true, // < --  figure out which exports are provided by modules to generate more efficient code for export * from ...
    usedExports: true, // < -- determine used exports for each module
    sideEffects: true // < -- recognise the sideEffects flag in package.json or rules to skip over modules which are flagged to contain no side effects when exports are not used
  };
};

exports.optimizeImages = () => {
  console.log(chalk.magentaBright("< ---- Optimize Images triggered"));

  return new ImageminWebpackPlugin({
    imageminOptions: {
      plugins: [
        [
          "mozjpeg",
          {
            progressive: true,
            quality: 60
          }
        ],
        [
          "pngquant",
          {
            quality: 60
          }
        ],
        "svgo"
      ]
    }
  });
};
