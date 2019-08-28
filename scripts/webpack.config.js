const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

module.exports = () => {
    
    return {
        mode: 'development',
        entry: resolve(__dirname, '../src'),
        output: {
            path: resolve(__dirname, '../dist'),
            filename: 'bundle.js'
        },
        devtool: false,
        module: {
            rules: [
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
            new CleanWebpackPlugin()
        ]
    };
}