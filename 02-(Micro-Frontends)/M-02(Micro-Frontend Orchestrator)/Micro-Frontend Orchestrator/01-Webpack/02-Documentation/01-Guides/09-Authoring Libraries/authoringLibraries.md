# Authoring Libraries

Aside from application, webpack can also be used to bundle JavaScript libraries. In this section we'll learn about how to bundle our library and expose it to the world.

## Authoring a library

We are going to create a library which will convert numeric representation to a texual one and vice-versa.

e.g. 2 to "two"

### 1. **Basic Project Structure**

```json
- webpack.config.js
- package.json
- /src
    - index.js
    - ref.json
```

### 2. **Project Initialization**

```bash
npm init -y
npm install --save-dev webpack webpack-cli lodash
```

[Checkout](./practice/src/index.js)

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-number.js",
  },
};
```

### 3. Expose the Library

```js
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new htmlWebpackPlugin({
      title: "Custom Library Testing",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-number.js",
    library: "webpacknumbers",
    clean: true,
  },
};
```

- We successfully exposed now users can use the library only through _script tag._
- However it only works when it's referenced through script tag. It can't be used in other environment like CommonJS, AMD, Node.js, etc.
- As a library author, we want it to be compatible in different environment, i.e, used should be able to consume the bundled library in multiple ways listed below:

```js
// CommonJS module require
const webpacknumbers = require("webpack-numbers");

//AMD module require
require(["webpackNumbers"], function (webpackNumbers) {
  webpackNumber.wordToNum("Two");
});
```

```html
<!-- script (local testing) -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Testing Custom Library</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    </style>

    <script src="http://127.0.0.1:5500/System-Design-To-FullStacks/02-(Micro-Frontends)/M-02(Micro-Frontend%20Orchestrator)/Micro-Frontend%20Orchestrators/01-Webpack/02-Documentation/01-Guides/09-Auth%20Libraries/practices/dist/webpack-number.js"></script>
  </head>
  <body>
    <h1
      style="text-align: center; background-color: antiquewhite; padding: 1rem;"
    >
      Testing Custom Library
    </h1>
  </body>
  <script>
    console.log("Testing custom library");
    const numToWord = webpacknumbers.numToWord(2);
    console.log("numToWord", numToWord);

    const numToWord1 = webpacknumbers.numToWord(9);
    console.log("numToWord", numToWord1);
    const numToWord2 = webpacknumbers.numToWord(0);
    console.log("numToWord", numToWord2);
    const numToWord3 = webpacknumbers.numToWord(5);
    console.log("numToWord", numToWord3);

    const wordToNum = webpacknumbers.wordToNum("Two");
    console.log("wordToNum", wordToNum);
  </script>
</html>

<!-- Via network request -->
<script src="https://example.org/webpack-numbers.js"></script>
```

To achieve such kind of accessability we need to modify the _configuration file_.

```js
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-number.js',
    globalObject: 'this',
    library: {
        name: 'webpackNumbers',
        type: 'umd'
    },
    clean: true
}
```
