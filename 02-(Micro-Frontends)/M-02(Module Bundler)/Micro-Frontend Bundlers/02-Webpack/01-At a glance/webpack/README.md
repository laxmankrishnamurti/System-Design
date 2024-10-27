# KEY-TAKEAWAYS

## There are two main directory which is necessary for webpack, are:-

- src
- dist

Both should be in the root directory.

**At the end webpack is just a bundler so it requires some entry point to compile all files and compose it into a single module**

- src

  - entry point
    - index.js

- dist
  - entry point
    - index.html

```json
const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    }
}
```

```bash
# Run the build commond

npm run build
```

A file will be created in the _dist_ named _output.js_.

## Create a webpack-server

Automatically bundle the application and run it on a specific port and reflect those changes on the web page.

```bash
npm i webpack-dev-server --save-dev
npm i webpack-dev --save-dev
```

```json
"start": "webpack-dev-server --mode development --open"
```

```json
const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
}
```

## Include CSS files

```bash
npm install --save-dev style-loader css-loader
```

```json
const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
```

## We can also hand-over the HTML file to webpack

Put the index.html file into the _src_ directory and unlink the _script_ link.

```bash
npm install --save-dev html-webpack-plugin
```

```json
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}
```
