_Before deep dive into modules let's first understand about modular programming._

## **What is modular programming?**

- **It is a system design techniques.**

  ### **What is system design?**

  - System design is the process of conceptualizing how a software system will work before it is implemented or modified.
  - Software design also refers to the direct result of the design process.
  - Software design usually is directed by goals for the resulting system and involves problem-solving and planning - including :-
    - High-level software architecture
    - Low-level component and
    - Algorithm design

- **It emphasizes separating the functionality of a program into independent, interchangable modules**
- **Each module contains everything necessary to execute only one aspect of _'concern'_ of the desired functionality**

<code>To be more precise, in modular programming we have collection of modules which consists of pre-wirtten functions that does a particular task to achieve or solve a particular problem. Where each module is independent and have their own use-cases which we can import into our program files and use it's pre-written functions. That's it. Just make it simple as much as possible.</code>

Let's move further.....

## What are modules?

- As we know in modular programming, developers break program up into discrete chunks of functionality called a module.
- Each module has a smaller surface area than a full program.
- Well written modules provides solid abstractions(hiding underlying complexities) and encapsulation(using properties of some other modules) boundries, so that each module has a coherent(well-structured) design and a clear purpose within the overall application.

**_Webpack also builds on modular programming based concepts._**

## What is a webpack module?

In contrast of _Node.js modules_, webpack modules can express their dependencies in a variety of ways, are :-

- An **ES2015 import** statement

  - There are two ways to use _import_ statement

    _import_ is not a function that is responsible for loading a module, it does that work but the point is it is not a function itselt. It is just a keyword so we cannot use it to declare a variable.

    - Static import declaration

      - The static _import_ declaration is used to import read-only live bindings which are exported by another module. The imported bindings are called _live bindings_ because they are updated by the module that exported the binding, but cannot be re-assigned by importing module.

      - Because of it's static nature all modules which are used in the application will be loaded synchronously at the runtime.

      ```js
      //syntax (Declarative syntax)
      import express from "express";
      ```

    - Dynamic import declaration

      - It is a function like expression, like this

    ```js
    import(expres);
    ```

    - it allows loading an ECMAScript module asynchronously and dynamically into a potentially non-module environment.

- A **CommonJS** _required()_ statement

  ```JS
    const express = require("express")
  ```

  - In Module Context there are three main free variables in a module
    - require
      - holdes exported object
    - exports
      - the actual function
    - module
      - an object of multuple functions

- An **AMD** _define_ and _require_ statement

  - Stands for _Asynchronous Module Definition_
  - It specifies the mechanism for defining modules such that the module and its dependencies can be asynchronously loaded.
  - This is particularly well suited for the browser environment where synchronous loading of modules incurs performance, usability, debuggin, and cross-domain access problems.

  **Fun part ===> It is unrelated to the technology company AMD and the processors it makes.**

  ```js
    //Syntax
    define(id?, dependencies?, factory);
  ```

  - Arguments details

    - id :: String literal
    - dependencies :: An array literal of the module ids that are dependencies required by the module that is being defined.
    - factory :: This is a function that should be executed to instantiate the module or an object. If the factory is a function it should only be executed once. If the factory argument is an object, that object should be assigned as the exported value of the module.

    ```js
    define("alpha", ["require", "exports", "beta"], function (
      require,
      exports,
      beta
    ) {
      exports.verb = function () {
        return beta.verb();
        //Or:
        return require("beta").verb();
      };
    });
    ```

- An **@import statement** inside of a _css/sass/less_ file.

  - The _@import_ CSS at-rule is used to import style rules from other valid stylesheet.
  - An _@import_ rule must be defined at the top of the stylesheet before any other at-rule (except _@charset_ and _@layer_) and style declaration otherwise it will be ignored.

  ```css
  @import url layer;
  ```

  - url :: It is a string or a type representing the location of the resource to import.
  - The URL may be absolute or relative.

  ```css
  @import url supports(supports-condition) list-of-media-queries;
  ```

  - list-of-media-queries

    - Is a comma-separated list of media queries, which specify the media-dependent conditions for applying the CSS rules defined in the linked URL. If the browser does not support any of these queries, it does not load the linked resource.

  - layer-name

        ```css
        @import url layer(layer-name) supports(supports-condition);
        ```

        - The _@layer CSS at-rule_ is used to declare a cascade layer and can also be used to define the order of precedence in case of multiple cascade layers.

        ```html
        <p class="alert">Beware of the zombies</p>
        ```

        ```css
        @layer module, state;

        @layer state {
            .alert {
            background-color: brown;
            }
            p {
            border: medium solid limegreen;
            }
        }

        @layer module {
            .alert {
            border: medium solid violet;
            background-color: yellow;
            color: white;
            }
        }
         ```

- An image uri in a stylesheet _url(...)_ or HTML _<img src=.../>_ file.

```css
.container {
  backgroun-image: url("...relative/or/absolute/path/of/the/image");
}
```

**_these are nothing but a way of importing the webpack module which it creates. Webpack bundle the application into multiple modules so that we can import into into the root application in a micro-frontend architecture. So, these are nothing but a way of importing these modules which webpack creates while bundling the application or assets._**

## Supported module type

Webpack supports the following module types natively:

- **ECMAScript modules**

  ECMAScript modules(ESM) is a specification/standardization for using modules in the web. It is supported by all modern browsers and the recommended way of writing modular code for web.

  _Webpack supports processing ECMAScript modules to optimize them._

  **Exporting**

  The _export_ keyword allow to expose things from an ESM to other modules

  ```js
  // only reading is exposed
  // it's not possible to modify the variable from outside
  export const CONSTANT = 42;

  export let variable = 42;

  export function fun() {
    console.log("fun");
  }

  export class C extends Super {
    method() {
      console.log("method");
    }
  }

  let a, b, other;
  export { a, b, other as c };

  export default 1 + 2 + 3 + more();
  ```

  **Importing**

  The _import_ keyword allow to get reference to things from other modules into an ESM.

  ```JS
  // import "bindings" to exports from another module
  // these bindings are live. The values are not copied,
  // instead accessing "variable" will get the current value
  // in the imported module
  import { CONSTANT, variable } from './module.js';

  // import the "namespace object" which contains all exports
  import * as module from './module.js';
  module.fun();

  // shortcut to import the "default" export
  import theDefaultValue from './module.js';
  ```

  **Flagging modules as ESM**

  By this, we are trying to imform webpack that the module we are going to export or import is either ESM or CommonJS Module. That's it.

  Node.js established a way of explicitly setting the module type of files by using a property in the <code>package.json</code>.

  Setting ::

  ```js
  //Force them to be ESM
  {
    type: "module";
  }
  ```

  ```js
  //Force them to be CommongJS module.
  {
    type: "commonjs";
  }
  ```

  - In addtion to that, files can set the module type by using <code>.mjs</code> or <code>.cjs</code>

    - <code>.mjs</code> ===> will force them to be ESM
    - <code>.cjs</code> ===> will force them to be CommonJS module.

  - There is one more way to froce the module to be either ESM or CommonJS module, using DataURLs.
    - mime type
      - <code>text/javascript</code> or <code>application/javascript</code> mime type will also force module type of ESM.

  We are doing all these things because to inform _webpack_ we are going to use either ESM or commonJS module so that it can process the module according to them and can optimize the performance.

  #### **Note ===> Only the _default_ export can be imported from non-ESM means if our module type is commonJS then we cannot import anything from the module which has not default export.**

  #### **Note ===> CommonJS syntax is not available :: <pre>require, module, exports</pre> \_\_fiilename, \_\_dirname**

  ### **_It means webpack mostly used ESM than CommonJS module. So, try to use ESM modules in the application for better performance and optimization._**

  - In addition to that webpack supports modules written in a variety of languages and preprocessors via loader. Loaders describe to webpack how to process non-native modules and include these dependencies into our bundles. The webpack community has built loaders for a wide variety of popular languages and language processors, including:
    - CoffeeScript
    - TypeScript
    - ESNext (Babel)
    - Sass
    - Less
    - Stylus
    - Elm

- **CommonJS modules**
- **AMD modules**
- **Assets**
- **WebAssembly modules**
