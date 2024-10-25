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
