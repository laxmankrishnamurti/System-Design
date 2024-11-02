# KEY TAKEAWAYS

## **1. In development mode we should remove the entry file from the _package.json_ file and make it _private_ to avoid accidental publish of our code.**

## **2. In this example, In this example, there are implicit dependencies between the _script_ tags. Our index.js file depends on lodash being included in the page before it runs. This is because index.js never explicitly declared a need for lodash; it assumes that the global variable \_ exists.**

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Getting started</title>
  <script src="https://unpkg.com/lodash@4.17.20"></script>
</head>
```

- It may create problems to manage JavaScript project by this way:
  - It is not immediately apparent that the _script_ depends on an external library.
  - If a dependency is missing, or included in the wrong order, the application will not function properly.
  - If a dependency is included but not used, the browser will be forced to download unnecessary code.

**Webpack provides some sort of way to manage these script instead.**

### Creating a Bundle

- Tweak the directory structure slightly, separating the _"source code (./src)"_ from our
  _"distribution code (./dist)"._

- Source Code ===> The source code is the code that we'll write and edit.
- Distribution Code ===> The distribution code the minimized and optimized output of our build process that will eventually be loaded in the browser.

- Install the _lodash_ library locally
- _import_ the _lodash_ library in the index.js file
- Modify the _index.html_ file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Getting started</title>
    <!-- <script src="https://unpkg.com/lodash@4.17.20"></script> -->
  </head>
  <body>
    <h1 style="text-align: center;">Basic webpack setup</h1>
    <!-- <script src="./src/index.js"></script> -->
    <script src="main.js"></script>
  </body>
</html>
```

```js
import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  //Now, lodash is loaded by the import statement
  element.innerHTML = _.join(["Hello from", "Webpack"], " ");

  return element;
}

document.body.appendChild(component());
```

This setup, _index.js_ explicitly requires _lodash_ to be present and bind it as "\_(no global scope pollution)".

**Now, it's time to build the project using webpack.**

1. First webpack search for _package.json_ file to get the information about all modules dependencies. And it uses this information for building a _dependency graph_

2. It then uses a graph to generate an optimized bundle where script will be executed in the correct order.

3. Run the command

```bash
$ npx webpack
```

- This command will take our _index.js_ file from _src_ directory which is the entry point for our application and will generate _main.js_ file in the _dist_ directory as an output.

- The _npx_ command will run the webpack binaries (which is in the /node_modules/.bin/webpack) of the webpack package which we have already installed at the begining of the project.
