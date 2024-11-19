# Installation

**Pre-requisites**

- Fresh version of Node.js should be installed on your system.

  - Node.js LTS

- **Local installation**

  ```bash
  $ npm install --save-dev webpack

  # download specific version of webpack
  $ npm install --save-dev webpack@<version>

  # to call webpack from the command line, we'll also need to install the CLI
  $ npm install --save-dev webpack-cli
  ```

_use '--save-dev' only when we are going to use webpack only for bundling and will not be used in production._

**Typically webpack is run via one or more _npm script_ which will look for a webpack installation in the _node_module_ directory.**

```json
// package.json

"script": {
    "build": "webpack",

    //if we want to modify the webpack.config.js name with other name.
    "build": "webpack --config webpack.config.js"
}
```

We can interact with webpack either from its _CLI_ or _API_.

# Command Line Interface

Webpack has its own configuration file called _webpack.config.ts_ for proper usage and easier distribution.

- webpack CLI version5.0.0 requires ::
  - node >= v14.15.0
  - webpack >= 5.0.0
  - webpack dev server >= 4.0.0

**If we want to run webpack using _npx/npm_ we must have _webpack-cli_ installed**

[Webpack Command Line Interface](../03-Webpack-CLI/webpackCLI.md)
