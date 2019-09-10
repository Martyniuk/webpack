// Core
const webpack = require("webpack");
const devServer = require("webpack-dev-server");
const hot = require("webpack-hot-middleware");
const chalk = require("chalk");
const openBrowser = require("react-dev-utils/openBrowser");
const waitPage = require("webpack-dev-server-waitpage");
// Config
const getDevConfig = require("./config/webpack.dev");

// Constants
// const { HOST, PORT } = require("./constants");

(async () => {
  const config = await getDevConfig();
  const {
    devServer: { host, port }
  } = config;
  const compiler = webpack(config);
  const server = new devServer(compiler, {
    // lifecycle hook of devserver, gives chance to register middleware
    host,
    port,
    // optimizes work with SPA, return page to index.js by default
    historyApiFallback: true,
    // Error will be shown inside Browser page
    overlay: true,
    // cleans up output of console
    quiet: true,
    // no output at ALL
    clientLogLevel: "none",
    // total Silence
    noInfo: true,
    before: (app, server) => {
      app.use(waitPage(server, { theme: "material" }));
    },
    after: app => {
      app.use(
        hot(compiler, {
          // additional options can be given
          log: false
        })
      );
    }
  });

  server.listen(port, host, () => {
    console.log(
      `${chalk.greenBright("⟹  Server is listening on")} ${chalk.blueBright(
        `http://${host}:${port}`
      )}`
    );

    openBrowser(`http://${host}:${port}`);
  });
})();
