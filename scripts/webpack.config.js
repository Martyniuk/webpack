const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    
    return {
        mode: 'development',
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Dashboard',
                template: './static/template.html'
            })
        ]
    };
}