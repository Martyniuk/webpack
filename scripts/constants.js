// Core
const { path: PROJECT_ROOT } = require("app-root-path");
const { resolve } = require("path");

// Network
exports.HOST = "localhost";
exports.PORT = 3000;

// Paths
exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE = resolve(PROJECT_ROOT, "./src");
exports.BUILD = resolve(PROJECT_ROOT, "./dist");
exports.STATIC = resolve(PROJECT_ROOT, "./static");

// Formatting
exports.CHUNK_NAME_JS = "[name].[chunkhash].[id].js";
exports.CHUNK_NAME_CSS = "[name].[contenthash].[id].css";
exports.CHUNK_NAME_ASSET = "[name].[hash:5].[ext]";
