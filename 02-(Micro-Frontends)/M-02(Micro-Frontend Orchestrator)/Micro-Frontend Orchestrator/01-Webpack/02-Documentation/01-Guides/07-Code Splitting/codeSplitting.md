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
  - **If there are any duplicated modules between entry chunks they will be included in both bundles.**
  - **It isn't as flexible and can't be used to dynamically split code with the core application logic.**
