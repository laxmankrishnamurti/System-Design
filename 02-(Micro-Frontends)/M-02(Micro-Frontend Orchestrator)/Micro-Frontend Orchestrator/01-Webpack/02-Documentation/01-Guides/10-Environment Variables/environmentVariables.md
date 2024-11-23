# Environment Variables

Before coming to the topic lets learn about the differences between _npm_ and _npx_.

`npm` and `npx` are not the same; they serve different purposes in the Node.js ecosystem. Here's a detailed explanation of both:

### **What is `npm`?**

`npm` stands for **Node Package Manager**, and it is used primarily for:

1. **Installing Packages**: You can download and install libraries or tools from the npm registry.

   ```bash
   npm install <package-name>
   ```

   Example:

   ```bash
   npm install express
   ```

2. **Managing Dependencies**: It maintains a `package.json` file to track dependencies in your project.

3. **Running Scripts**: You can define and run custom scripts in your `package.json` using `npm run`.

   ```bash
   npm run start
   ```

4. **Publishing Packages**: Developers can publish their own packages to the npm registry using `npm publish`.

---

### **What is `npx`?**

`npx` is a **Node Package Runner**, introduced in npm version 5.2 (and higher), and is used for:

1. **Running Executables from npm**: It lets you execute binaries (CLI tools) from npm without globally installing them.

   ```bash
   npx <package-name>
   ```

   Example:

   ```bash
   npx create-react-app my-app
   ```

   - Here, `create-react-app` is downloaded and executed without being installed globally on your machine.

2. **Temporary Package Usage**: It fetches the package, runs it, and discards it afterward if not needed again.

3. **Avoiding Global Installs**: Instead of globally installing a CLI tool like `webpack` (`npm install -g webpack`), you can use `npx webpack` directly, avoiding clutter in your global namespace.

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
  - Publishing or maintaining your project.

- Use **`npx`** when:
  - Running CLI tools or commands without installing them globally.
  - Quickly trying out a package without committing to installation.
  - Running a binary included in your project dependencies.
