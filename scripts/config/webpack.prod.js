// Core
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');

// Instruments
const { SOURCE } = require('../constants');
const getCommonConfig = require('./webpack.common');

module.exports = () => {

    return merge(getCommonConfig(), {
        mode:    'production',
        entry:   SOURCE,
        plugins: [ new CleanWebpackPlugin() ]
    });
};
