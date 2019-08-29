// Core
const { path: PROJECT_ROOT } = require('app-root-path');
const { resolve } = require('path');

// Network
exports.HOST = 'localhost';
exports.PORT = 3000;

// Paths
exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE = resolve(PROJECT_ROOT, './src');
exports.BUILD = resolve(PROJECT_ROOT, './dist');
