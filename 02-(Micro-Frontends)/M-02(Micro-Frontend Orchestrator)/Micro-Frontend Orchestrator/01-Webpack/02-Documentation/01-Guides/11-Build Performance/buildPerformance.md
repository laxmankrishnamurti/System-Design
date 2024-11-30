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
