# Environment Variables

Before coming to the topic lets learn about the differences between _npm_ and _npx_.

`npm` and `npx` are not the same; they serve different purposes in the Node.js ecosystem. Here's a detailed explanation of both:

### **What is `npm`?**

`npm` stands for **Node Package Manager**, and it is used primarily for:

1. **Installing Packages**: We can download and install libraries or tools from the npm registry.

   ```bash
   npm install <package-name>
   ```

   Example:

   ```bash
   npm install express
   ```

2. **Managing Dependencies**: It maintains a `package.json` file to track dependencies in our project.

3. **Running Scripts**: We can define and run custom scripts in our `package.json` using `npm run`.

   ```bash
   npm run start
   ```

4. **Publishing Packages**: Developers can publish their own packages to the npm registry using `npm publish`.

---

### **What is `npx`?**

`npx` is a **Node Package Runner**, introduced in npm version 5.2 (and higher), and is used for:

1. **Running Executables from npm**: It lets we execute binaries (CLI tools) from npm without globally installing them.

   ```bash
   npx <package-name>
   ```

   Example:

   ```bash
   npx create-react-app my-app
   ```

   - Here, `create-react-app` is downloaded and executed without being installed globally on our machine.

2. **Temporary Package Usage**: It fetches the package, runs it, and discards it afterward if not needed again.

3. **Avoiding Global Installs**: Instead of globally installing a CLI tool like `webpack` (`npm install -g webpack`), we can use `npx webpack` directly, avoiding clutter in our global namespace.

4. **Running Locally Installed Binaries**: If a binary is installed as a project dependency (in `node_modules/.bin`), `npx` can run it directly:
   ```bash
   npx jest
   ```

---

### **Key Differences**

| Feature             | `npm`                                       | `npx`                                     |
| ------------------- | ------------------------------------------- | ----------------------------------------- |
| **Purpose**         | Manage packages (install, publish, etc.)    | Run binaries or CLI tools directly.       |
| **Execution**       | Does not execute binaries.                  | Executes binaries without global install. |
| **Global Installs** | Requires global installation for CLI tools. | No need for global installs.              |
| **Usage Example**   | `npm install eslint -g`                     | `npx eslint`                              |

---

### **When to Use Which?**

- Use **`npm`** when:

  - Installing or managing dependencies.
  - Running project scripts.
  - Publishing or maintaining our project.

- Use **`npx`** when:
  - Running CLI tools or commands without installing them globally.
  - Quickly trying out a package without committing to installation.
  - Running a binary included in our project dependencies.

Now, lets come to the topic.

## Prerequisits

To use the _env_ variables, we must convert _module.exports_ to a function. Because Typically, _module.exports_ points to the configuration object.

```js
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  console.log(env);
  console.log(env.goal);

  return {
    mode: "development",
    entry: "./src/index.js",
    plugins: [
      new htmlWebpackPlugin({
        title: "Environment variables in webpack",
      }),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
};
```

Now, run the command:

```bash
npx webpack
```

```bash
# Output

{ WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
undefined
asset main.bundle.js 1.21 KiB [compared for emit] (name: main)
asset index.html 259 bytes [compared for emit]
./src/index.js 32 bytes [built] [code generated]
webpack 5.96.1 compiled successfully in 507 ms
```

For both console value we have got different-different outputs becasue webpack has already set up some values as _env_ but the second console of _env.goal_ this is a custom value so webpack dosen't resolve because we have not passed any environment value such as _goal_.

Lets set up some environment values:

```bash
npx webpack --env goal=local
```

```bash
# Output

{ WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, goal: 'local' }
local
```

## Built-in environment variables

Lets explore some built-in environment variables in webpack.

Let's break down the **Webpack CLI environment variables** in a simple way:

### 1. **`WEBPACK_CLI_SKIP_IMPORT_LOCAL`**

- **What it does:** When this is set to `true`, Webpack CLI will _not_ use the locally installed version of `webpack-cli` inside our project folder.
- **Why use it?**  
  Normally, Webpack CLI uses the version installed in our project (`node_modules`). This variable is helpful if we want to bypass that and use a globally installed `webpack-cli` instead (useful for debugging or testing different setups).

---

### 2. **`WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG`**

- **What it does:** When this is set to `true`, Webpack CLI forces the configuration file (`webpack.config.js`) to be loaded as an **ES Module (ESM)**.
- **Why use it?**  
  Some projects use the newer ESM syntax (`import/export` instead of `require/module.exports`). If Webpack isn't detecting our ESM config file correctly, we can force it to do so with this.

---

### 3. **`WEBPACK_PACKAGE`**

- **What it does:** This allows we to specify a custom version of Webpack to be used in the CLI.
- **Why use it?**  
  If we want to test or use a specific version of Webpack (e.g., a beta or development version), we can provide its package name or path here. It's useful for testing new versions or non-standard builds.

---

### 4. **`WEBPACK_DEV_SERVER_PACKAGE`**

- **What it does:** Similar to `WEBPACK_PACKAGE`, this lets we specify a custom version of the `webpack-dev-server` to use.
- **Why use it?**  
  Useful if we're testing or debugging a specific version of the `webpack-dev-server` (e.g., testing new features in a beta release).

---

### 5. **`WEBPACK_CLI_HELP_WIDTH`**

- **What it does:** This allows we to control the width of the help text output when we use the `webpack --help` command.
- **Why use it?**  
  If our terminal screen is too narrow or too wide, the help text might look messy. we can adjust the width to make it easier to read.

---

### Practical Examples

Here’s how we might use these in a terminal:

```bash
# Example: Skip the local version of webpack-cli
WEBPACK_CLI_SKIP_IMPORT_LOCAL=true npx webpack

# Example: Force ESM config loading
WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG=true npx webpack

# Example: Use a specific webpack version
WEBPACK_PACKAGE=webpack@5.0.0 npx webpack

# Example: Use a specific webpack-dev-server version
WEBPACK_DEV_SERVER_PACKAGE=webpack-dev-server@4.0.0 npx webpack-dev-server

# Example: Set custom help output width
WEBPACK_CLI_HELP_WIDTH=80 webpack --help
```

Each variable gives us more control over how Webpack CLI behaves, especially when debugging or working with different setups.

## Overview

Here’s an expanded and detailed version of the table:

| **Environment Variable**                | **Detailed Description**                                                                                                                                                                                                                                                           | **When/Why to Use**                                                                                                                                                                                       | **Example**                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **`WEBPACK_CLI_SKIP_IMPORT_LOCAL`**     | When set to `true`, it skips the local version of `webpack-cli` found in our project's `node_modules`. Normally, Webpack CLI automatically uses the version installed in our project. By setting this, we can force Webpack CLI to use a globally installed version instead.       | Useful when debugging issues with the local `webpack-cli` version, testing global setups, or if the local version has conflicts or is not installed.                                                      | `WEBPACK_CLI_SKIP_IMPORT_LOCAL=true npx webpack`                             |
| **`WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG`** | When set to `true`, Webpack CLI will force our configuration file (`webpack.config.js`) to load as an **ES Module**. This is particularly useful for projects that use modern `import/export` syntax rather than the older `require/module.exports`.                               | If Webpack fails to recognize our ESM-based configuration file (e.g., when using `"type": "module"` in `package.json`), this flag ensures it is loaded as ESM.                                            | `WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG=true npx webpack`                         |
| **`WEBPACK_PACKAGE`**                   | Allows we to specify a custom version of Webpack to be used during the build process. For example, we can use a specific version (e.g., a beta, alpha, or custom fork of Webpack) by providing its name or path.                                                                   | Helps test new Webpack versions or custom builds without permanently altering our project's dependencies. Ideal for experimenting with features or fixing bugs that may be patched in a specific version. | `WEBPACK_PACKAGE=webpack@5.0.0 npx webpack`                                  |
| **`WEBPACK_DEV_SERVER_PACKAGE`**        | Similar to `WEBPACK_PACKAGE`, this allows we to specify a custom version of the `webpack-dev-server`. we can use a specific version, beta release, or custom fork by providing its package name or path.                                                                           | Useful for debugging or testing features in a specific version of the `webpack-dev-server`. It ensures our setup works with new or experimental versions before officially upgrading.                     | `WEBPACK_DEV_SERVER_PACKAGE=webpack-dev-server@4.0.0 npx webpack-dev-server` |
| **`WEBPACK_CLI_HELP_WIDTH`**            | Sets a custom width for the output of the `webpack --help` command. By default, the help text output adapts to the terminal width, but this can sometimes look cluttered or messy. Adjusting the width improves readability of the CLI help text, especially in smaller terminals. | Improves the appearance of the `webpack --help` command output, especially if we are working in a narrow or unusually wide terminal environment.                                                          | `WEBPACK_CLI_HELP_WIDTH=80 webpack --help`                                   |

This detailed table should provide clarity on each variable, along with its use cases and practical examples for better understanding!
