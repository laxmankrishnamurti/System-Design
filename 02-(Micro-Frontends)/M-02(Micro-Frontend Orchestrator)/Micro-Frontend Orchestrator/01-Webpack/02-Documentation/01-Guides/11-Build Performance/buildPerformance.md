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

  It means when we run the bild command:

  ```bash
  $ npm run build
  ```

  Webpack initialize all loaders and plugins before starting the build process.

- **`Resolving`**

  Resolving means _finding the location of the module where it is located._

  The given steps are optimizations to make Webpack resolve module paths faster. Here's a simple explanation with configuration examples:

  ***

  1. **Minimize resolve options**: Reduce the number of directories and file extensions Webpack searches to avoid unnecessary file system operations.  
     Example:

  ```javascript
  module.exports = {
    resolve: {
      modules: ["node_modules"], // Keep this minimal.
      extensions: [".js", ".json"], // List only essential extensions.
      mainFiles: ["index"], // Only consider specific filenames.
      descriptionFiles: ["package.json"], // Limit files to check for descriptions.
    },
  };
  ```

  ***

  2. **Disable `resolve.symlinks`**: If we've not used symbolic links (like `npm link`), turn this off to skip resolving symlinks and improve speed.  
     Example:

  ```javascript
  module.exports = {
    resolve: {
      symlinks: false, // Skips resolving symbolic links.
    },
  };
  ```

  ***

  3. **Disable `resolve.cacheWithContext`**: If our custom plugins don’t depend on the resolving context (like the location of the file), disable this to prevent extra caching overhead.  
     Example:

  ```javascript
  module.exports = {
    resolve: {
      cacheWithContext: false, // Optimizes caching without considering context.
    },
  };
  ```

  These tweaks ensure Webpack spends less time resolving paths, speeding up the build.

  ***

  #### **`What will happen if we don't use the optimization options.`**

  If we don't apply these optimizations in our Webpack configuration, here's what will happen:

  ***

  1. **Not minimizing resolve options**:

  - Webpack will check multiple directories (`resolve.modules`), extensions (`resolve.extensions`), and files (`resolve.mainFiles`, `resolve.descriptionFiles`) unnecessarily.
  - This increases the number of file system calls, slowing down the module resolution process.  
    Example: If we list unused extensions like `.jsx` or unnecessary directories, Webpack will still try to look for those, wasting time.

  ***

  2. **Not disabling `resolve.symlinks`**:

  - Webpack will resolve symbolic links (created by `npm link` or `yarn link`) every time.
  - If our project doesn't use symlinks, this step becomes redundant and adds unnecessary overhead to the resolution process.

  ***

  3. **Not disabling `resolve.cacheWithContext`**:

  - Webpack will include context (e.g., the directory path of the importing file) in its caching logic.
  - If our custom plugins don’t rely on context, this extra step wastes memory and time for caching irrelevant details, leading to slower builds.

  ### Impact:

  Without these configurations, Webpack will perform redundant operations during the build, causing slower module resolution and longer build times, especially for large projects.

  ***

  ### **`How webpack resolve modules?`**

  Webpack doesn't traverse _all system files_ to resolve modules—it follows a structured and efficient process for finding the modules required to build our application. Here's how the underlying process works:

  ***

  #### 1. **Finding `webpack.config.js`**

  When we run the `webpack` command:

  - Webpack looks for the configuration file named `webpack.config.js` in the **current working directory** (where we run the command).
  - If we use a custom file name or location, we must specify it using `--config`:
    ```bash
    webpack --config /path/to/our/custom-config.js
    ```

  ***

  #### 2. **Module Resolution Process**

  When Webpack encounters an `import` or `require` statement in our code (e.g., `import myModule from './file'`), it resolves the module path using these steps:

  #### a) **Resolve Direct File Paths**

  - If the module is a file (`./file.js`), Webpack checks:
    1.  **Exact Match**: Looks for the file directly (`./file.js` or `./file`).
    2.  **Extensions**: If no exact match is found, Webpack appends extensions from `resolve.extensions` (e.g., `.js`, `.json`).
  - Example:
    ```javascript
    resolve: {
      extensions: ['.js', '.json'], // Default extensions.
    }
    ```
    If we `import './file'`, Webpack tries:
    - `./file.js`
    - `./file.json`

  #### b) **Resolve Node Modules**

  - If the module is not a relative/absolute path (e.g., `import lodash from 'lodash'`), Webpack:
    1.  Looks in `node_modules` directories defined in `resolve.modules`.  
        By default, it searches:
        - `/current/project/node_modules`
        - Parent directories' `node_modules` (e.g., `/home/laxmankrishnamurti/node_modules`).
    2.  Checks the module's `package.json` `main` field or `exports`.

  #### c) **Resolve Index Files**

  - If the module is a folder (e.g., `import module from './folder'`), Webpack looks for an **index file** in the folder:
    - `./folder/index.js`
    - `./folder/index.json`
  - This behavior is defined by `resolve.mainFiles`:
    ```javascript
    resolve: {
      mainFiles: ['index'], // Files to look for in folders.
    }
    ```

  ***

  #### 3. **Custom Plugins and Rules**

  Webpack uses plugins and rules from our `webpack.config.js`:

  - **Loaders**: Transform specific file types (e.g., `babel-loader` for `.js` files, `css-loader` for `.css`).
  - **Plugins**: Handle additional tasks like optimization or environment variables.

  During module resolution:

  - Webpack applies loaders to process the file contents.
  - Plugins may customize or optimize the resolution process.

  ***

  #### 4. **File System Calls**

  Without optimization:

  - Webpack makes **file system calls** to check all possible locations for a module.
  - Example:
    For `import x from './file'`:
    - Webpack checks:
      - `./file.js`
      - `./file.json`
      - `./file/index.js`  
        This is why minimizing `resolve.modules`, `resolve.extensions`, and other options improves speed.

  ***

  #### Summary of the Build Process:

  1. **Read Config File**: Webpack loads `webpack.config.js` (or default settings).
  2. **Parse Entry Point**: Starts from the `entry` file defined in the config.
  3. **Module Resolution**: Resolves all `import`/`require` statements using the steps above.
  4. **Apply Loaders**: Transforms files based on loaders.
  5. **Bundle Modules**: Combines all resolved modules into one (or more) output files.
  6. **Output**: Writes the bundled files to the `output` directory.

  By default, Webpack is efficient, but careful configuration (e.g., resolve settings) ensures it doesn't waste time on unnecessary file checks.

- **`DLLs (Dynamic-link library)`**

  This is a type of plugin that provide means of spliting bundles in a way that can drastically improve build time performance.

  This was originally introduced by _Microsoft_.

  ### **`Basics`**

  In simple terms:

  ### What is a DLL?

  DLL stands for **Dynamic Link Library**. In the context of Webpack, it means a set of precompiled libraries or files that our application uses frequently (e.g., React, Lodash). Instead of bundling these libraries repeatedly for every build, they are precompiled and linked dynamically.

  ### What is DLLReferencePlugin?

  `DLLReferencePlugin` is a Webpack plugin that helps our project connect to these precompiled DLL bundles. Instead of including those libraries in our app's bundle every time we build, it tells Webpack to "refer" to the precompiled versions.

  ***

  ### Why do we need it?

  Imagine we're building an application and using React and Lodash. Normally, every time we build, Webpack processes these libraries along with our code. This can slow down the build process.

  Using a DLL:

  1. **Precompile the libraries**: Webpack generates a separate bundle for libraries we don't change often.
  2. **Reference them in our app**: With `DLLReferencePlugin`, Webpack skips bundling these libraries again, making the build process much faster.

  ***

  ### How it works step by step:

  1. **Create a DLL file**: we use the `DllPlugin` to generate a file containing precompiled code of our libraries.
  2. **Reference the DLL**: Use `DLLReferencePlugin` in our main Webpack config to link to the precompiled DLL file.

  ***

  ### **`Deep Dive`**

  Let's dive deeper into the **DLLPlugin** and **DLLReferencePlugin** with a practical example and detailed explanation.

  ***

  ### Why DLL and DLLReferencePlugin Exist

  When we work on large projects, some libraries or modules (like React, Lodash, or Moment.js) don’t change often. Every time we build our project, Webpack bundles these libraries again, which is redundant and slows down the process.

  **Solution**:  
   By using the **DLLPlugin**, we can precompile these libraries into a separate bundle. Then, with the **DLLReferencePlugin**, we tell Webpack to reuse this precompiled bundle instead of processing it repeatedly.

  ***

  ### Key Components

  1. **DLLPlugin**: Creates a precompiled bundle of frequently used libraries.
  2. **DLLReferencePlugin**: Links our main application to that precompiled bundle.

  ***

  ### Step-by-Step Example

  #### 1. Setting Up the Project

  Let’s say we have a project that uses **React** and **Lodash**.

  Directory structure:

  ```
  project/
  ├── src/
  │   ├── index.js
  ├── dist/
  ├── webpack.config.js
  ├── package.json
  ```

  Install dependencies:

  ```bash
  npm install webpack webpack-cli react react-dom lodash --save
  ```

  ***

  #### 2. Create a DLL Bundle (Precompile Libraries)

  Add a separate Webpack config for the DLL bundle.

  **webpack.dll.js**:

  ```javascript
  const path = require("path");
  const webpack = require("webpack");

  module.exports = {
    entry: {
      vendor: ["react", "react-dom", "lodash"], // Libraries to precompile
    },
    output: {
      filename: "[name].dll.js", // Output file (vendor.dll.js)
      path: path.resolve(__dirname, "dist"),
      library: "[name]_library", // Expose the bundle as a global variable
    },
    plugins: [
      new webpack.DllPlugin({
        name: "[name]_library", // Match the library name
        path: path.resolve(__dirname, "dist/[name].manifest.json"), // Manifest file
      }),
    ],
  };
  ```

  Run the DLL build:

  ```bash
  npx webpack --config webpack.dll.js
  ```

  This generates:

  - **dist/vendor.dll.js**: The precompiled bundle.
  - **dist/vendor.manifest.json**: A file describing the bundle's contents.

  ***

  #### 3. Link the DLL Bundle to our App

  Update our main Webpack config to use the precompiled bundle.

  **webpack.config.js**:

  ```javascript
  const path = require("path");
  const webpack = require("webpack");

  module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: path.resolve(__dirname), // Base directory
        manifest: require("./dist/vendor.manifest.json"), // Link to the manifest
      }),
    ],
    mode: "development",
  };
  ```

  ***

  #### 4. Use the DLL Bundle in our HTML

  Reference the precompiled bundle in our HTML file so our app can use it.

  **index.html**:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Webpack DLL Example</title>
    </head>
    <body>
      <script src="vendor.dll.js"></script>
      <!-- Precompiled DLL -->
      <script src="bundle.js"></script>
      <!-- our app's bundle -->
    </body>
  </html>
  ```

  ***

  ### How It Works

  1. **First Build (DLL)**:

     - `webpack.dll.js` creates a bundle (`vendor.dll.js`) with React, ReactDOM, and Lodash.
     - A manifest file (`vendor.manifest.json`) is created, mapping these libraries.

  2. **Main Build**:

     - our app's Webpack config (`webpack.config.js`) uses `DLLReferencePlugin` to read the manifest.
     - Instead of bundling React, ReactDOM, or Lodash, Webpack references the precompiled DLL.

  3. **Runtime**:

     - The browser first loads `vendor.dll.js`.
     - our app's `bundle.js` reuses the precompiled libraries.

  ***

  ### Benefits

  - **Faster Builds**: Libraries like React are not rebuilt unless they change.
  - **Smaller Bundles**: our main app bundle does not include the libraries.
  - **Improved Caching**: If the libraries don’t change, the browser can cache `vendor.dll.js`.

  ***

  ### When to Use

  - Use DLLPlugin if our project heavily relies on large, stable libraries (e.g., React, Angular, or utility libraries like Lodash).
  - For small projects, it's overkill; modern Webpack optimizations like **code splitting** and **tree shaking** may suffice.

  ***
