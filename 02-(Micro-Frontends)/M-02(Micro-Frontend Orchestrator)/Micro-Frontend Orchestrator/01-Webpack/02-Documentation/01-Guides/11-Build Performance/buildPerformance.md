# Build Performance

In this section we'll learn about how we can improve our **`build/compilation`** performance.

## `1. General`

The following best practices should help, whether we're running build script in [development](../06-Development/practice/webpack.config.js) or **production.**

- **`Stay Up to Date`**

  - **Use the latest(v5.96.1 as of now) webpack version**
  - **Up-to-date with Node.js**
  - **Up-to-date with npm or yarn**

    Webpack alsways making performance improvements and newer version create more efficient module trees and increase resolving speed.

- **`Loaders`**

  Out of the box, webpack only understand JavaScript and JSON files. **Loaders** allow webpack to process other types of files and convert them into valid _modules_ that can be consumed by our application and added to the **dependency graph**

  **`What is dependency graph`**

  Any time one file depends on another, webpack treats this as a _dependency_. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as _dependencies_ for our application.

  - When webpack processes our application, it starts from a list of modules defined on the commond line or in its configuration file.

  - Starting from _entry points_, webpack recursively builds a _dependency graph_ that includes every module our application needs.

  - Then bundles all of those modules into a small number of bundles - often, only one - to be loaded by the browser.

  Now, lets come to the optimization part.

  - **Apply loaders to the minimal number of modules necessary. instead of:**

  ```js
  module.exports = {
    //...
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
      ],
    },
  };
  ```

  Here we have specified a rule that tells webpack apply the loader named _babel-loader_ to every file that ends up with _.js_ extension.

  This can impact on performance.

  - **Use the `include` field to only apply the loader modules that actually need to be transformed by it:**

  ```js
  module.exports = {
    //...
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader",
        },
      ],
    },
  };
  ```

- **`Bootstrap`**

  - **Each additional loader/plugin has a _bootup time_. Try to use as few tools as possible.**

  **`What is bootup time.`**

  Bootup time refers to the time it takes for a loader or plugin in webpack to initialize and start working during the build process. Fewer tools mean faster builds because less initialization is required.

  It means when we run our bild command like this:

  ```bash
  $ npm run build
  ```

  Webpack initialize all loaders and plugins before starting the build process.

- **`Resolving`**
