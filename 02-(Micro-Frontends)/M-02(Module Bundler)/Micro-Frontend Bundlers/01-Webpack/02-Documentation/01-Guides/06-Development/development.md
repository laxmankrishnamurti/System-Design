# Development

First lets set the current mode to the configuration file.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

## Using source maps

Source means the _origin_ and map means _targeting at a particular location or referencing to that particular location_.

Actually, when webpack try to bundle our modules it becomes difficult for it to track down the error or warning to their original location. So, that why it uses source mapping tools to point the error or warning to the origin.

In order to make it easier to track down errors and warnings, JavaScript offers _source maps_ which map our compiled code back to the source code and if there is any kind of errors or warnings occurs between bundiling process it can point the specific location. This becomes very useful for debuggin.

Its time to modify the configuration file.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map", // Only for development
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

## Choosing a Development tool

It means we can choose a tool for smooth development process that can continusoly compiling our code whenever we made some changes in our file and save it. The first option is to simply run the _npm run build_ command manually either we can use tools for this.

Yes, there are couple of different options available in webpack that help up to automatically compile our code whenever changes happen.

**1. Webpack's watch mode**
**2. Webpack-dev-server**
**3. Webpack-dev-middleware**

**1. Webpack's watch mode**

```json
{
  "name": "practice",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4"
  }
}
```

```bash
# Now we can run the watch command and webpack continuosly watching the dependency graph for any changes and if does it will recompiled the whole dependency graph.

npm run watch
```

## webpack-dev-server

It offers live reloading feature.

```bash
npm install --save-dev webpack-dev-server
```

Now, we need to tell the _dev-server_ where to look for files in order to render it in the browser.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map", // Only for development
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
```

- This tells webpack-dev-server to serve the files from the dist directory on _localhost:8080._

- The _optimization.runtimeChunk: 'single'_ was added because we are trying to put more than one entry file on a single HTML file.

- _webpack-dev-server_ serve bundled files from the directory defined in _output.path_ file will be available under _http://[host port]/[output public path]/[output file name]_

- webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.

- Lets add a script to easily run the dev server as well.

```json
{
  "name": "practice",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack serve --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4"
  }
}
```

## webpack-dev-middleware

_webpack-dev-middleware_ is a wrapper that will emit files processed by webpack to a server. We might get surpurised but yes! this is true. And the _webpack-dev-server_ is using the same concept at its core.

- It's available as a separate package to allow more custom setups if needed.

- We can also configure it with express. Lets do that.....

**Why we are using express here?**

Because _webpack-dev_ is a kind of middleware which require a server to use them. Because only server has the capabilities to use a middleware and serve files accoding to the configuration.

```bash
npm install --save-dev express webpack-dev-middleware
```

- We need to make some changes in the configuration file

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
```

- The _publicPath_ will be used within our server script as well in order to make sure files are served correctly on _http://localhost:3000_.

- Lets setup the _server.js_ file

```js
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");

const PORT = 3000;
const app = express();
console.log("webpack", webpack);
const compiler = webpack(config);
console.log("webpack compiler", compiler);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(3000, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
```

Lets add a script to _package.json_ to run the server

```json
"scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack serve --open",
    "server": "node server.js"
},
```
