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
