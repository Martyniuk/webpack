// Core
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');
const { resolve } = require('path');

// Config
const getDevConfig = require('./config/webpack.dev');

// Constants
const { HOST, PORT } = require('./constants');

const compiler = webpack(getDevConfig());

const server = new devServer(compiler, {
    // lifecycle hook of devserver, gives chance to register middleware
    host: HOST,
    port: PORT,
    // optimizes work with SPA, return page to index.js by default
    historyApiFallback: true,
    // Error will be shown inside Browser page
    overlay: true,
    // cleans up output of console
    quiet: true,
    // no output at ALL
    clientLogLevel: 'none',
    // total Silence 
    noInfo: true,
    after: app => {
        app.use(
            hot(compiler, {
                // additional options can be given
                log: false
            })
        )
    }
})

server.listen(PORT, HOST, () => {
    console.log(
        `${
            chalk.greenBright(
                '⟹  Server is listening on')} ${chalk.blueBright(`http://${HOST}:${PORT}`
            )
        }`
    
    );
});
