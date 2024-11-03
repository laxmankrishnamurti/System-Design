# KEY TAKEAWAYS

**1. Out of the box, webpack won't require us to use a configuration file. However, it will assume the entry point of your project is _src/index.js_ and will output the result in _dist/main.js_ minified and optimized for production.**

**2. Create a new file named _webpack.config.js_**
**3. Run the build command**

```bash
$ npx webpack --config webpack.config.js
```

Here, _--config_ option is used to show, we can build our project based on different-different configuration file.

But if a _webpack.config.js_ is present, the webpack command pick it up by default. A configuration file allow us to customize our build process and avoid unnecessary CLI command to build the application. In the configuration file we can specify _loader rules_, _plugins_, _resolve options_ and many more enhancement this way.

_Tips ==> [createapp.dev](https://createapp.dev) is an online tool for creating custom webpack configurations. It allows you to select various features that will be combined and added to the resulting configuration file. Also, it generates an example project based on provided webpack configuration that we can review in our browser and download._
