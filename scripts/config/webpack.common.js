// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Instruments
const { BUILD } = require('../constants');

module.exports = () => {
    
    return {
        output: {
            path:     BUILD,
            filename: 'bundle.js'
        },
        devtool: false,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader','css-loader' ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Dashboard',
                template: './static/template.html'
            }),
        ]
    };
}