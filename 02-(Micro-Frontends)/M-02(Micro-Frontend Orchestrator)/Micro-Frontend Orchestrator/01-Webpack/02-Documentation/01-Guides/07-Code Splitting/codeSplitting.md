# Code Splitting

This feature allows us to split our code into various bundles which can then be loaded on demand or in parallel.

It is used to achieve:

- smaller bundles
- control resource load prioritization

It used correctly, can have a major impact on load time.

**There are three general approaches to code splitting available:**

- **Entry Points**
- **Prevent Duplication**
- **Dynamic Imports**

## **Entry Points**

[Checkout](./01-EntryPoints/webpack.config.js)

- **There are some pitfalls to this approach**

  1. **If there are any duplicated modules between entry chunks they will be included in both bundles.**

  - Why is this a problem?

    - In both entry files _index.js & anotherModule.js_ we've included _lodash_ it means both file contains _lodash module_ which makes it heavy in size, impact on load time. As a result :

      - **Waste of space** :: Duplicated code makes our final build larger than necessary.

      - **Longer load time** :: Users downloading duplicate code for every bundle slows down page loading.

      - **Hard to maintain** :: If there are updates, all bundles containing duplicates must be updated.

  2. **It isn't as flexible and can't be used to dynamically split code with the core application logic.**

- We have to understand for which webpack uses the word _module_?
  - In webpack module means **_block of code_ used in different files**

## Prevent Duplication

```js
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    runtimeChunk: "single",
  },
};
```

[Checkout](./02-PreventDuplication/webpack.config.js)

- **The _dependOn_ option allows to share the modules between the chunks**

- **If we're going to use multiple entry points on a single HTML page, _optimization.runtimeChunk:'single'_ is needed too, otherwise we could get into trouble.**

- **This will create a new bundle named _shared.bundle.js_ in which all shared modules are included and every dependent module will use the file or module on runtime.**

**Additional Tips**

Although using multiple entry points per page is allowed in webpack, it should be avoided when possible in favor of an entry point with multiple imports: _entry: {['./src/index.js', './src/another.js']}_

This result is a better optimization and consistent execution order when using _async_ script tag.

**_Scenario : 01_**

```ts
entry: {
    index: './src/index.js',
    another: './src/another.js'
}
```

This will generate two separate files with the name of :

- _index.bundle.js_
- _another.bundle.js_

```html
<script src="index.bundle.js" async></script>
<script src="another.bundle.js" async></script>
```

**Problem with this approach**

- **Execution order issues:** Since both scripts are async, they may load and execute in a random order.

  - If _index.js_ depends on _another.js_, this can break the app.

- **Wasted optimization:** Webpack doesn’t know that these two scripts are related, so it can’t properly optimize them.

**_Scenario : 02_**

```ts
entry: {
  page: ["./src/index.js", "./src/another.js"];
}
```

This creates one single file _page.bundle.js_ that includes both _index.js_ and _another.js_

**Benefits**

- **Correct execution order:** Webpack ensures index.js loads before another.js (if needed).

- **Better optimization:** Webpack sees the relationship between files and can merge or deduplicate shared code.

- **Simpler setup:** Fewer script tags make managing the app easier.

#### **When to use single entry points**

Always prefer a single entry point with multiple imports unless:

- We want totally separate bundles for different pages or sections of your app.
- There’s a specific need for independent scripts.

By default, using one entry point simplifies our application and gives better performance.
