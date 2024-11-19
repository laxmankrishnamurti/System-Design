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
