# Why we use bundlers?

Technically, we can work with plain HTML, CSS, and JavaScript but it becomes harder to mange the application.

However, as web apps get more complex, we start using multiple files, libraries, or packages. Bundlers came along to help combine these files and make them work together efficiently.

If we talk about frontend frameworks like Reach, Angular, vue.js, it uses lots of dependencies and it will be harder to manage in vanila style so that's why we need bundlers which makes all these bundling process easy. Bundlers help compile these frameworks into code that the browser can understand easily and display on the webpage.

# History of bundlers

The need of bundlers started when javascript application became more complex. In the early 2010s, more people wanted to build _single-page application_ (SPA) where everything loads in one go and the page dosen't reload as we navigate.

First version of _webpack_ was released in 2012.

# What does a bundler

There are three main-important task that a bundler does :-

- Combine files

  It takes all different files, like JavaScript modules, CSS, images, and HTML and combine them into a single file or a few smaller files.

- Transpiling

  Frameworks like React often use JSX or TypeScript, which browser dosen't understand directly. Bundlers use tools like _babel_ to convert them into plain JavaScript so that browser can understand it and run as well.

- Optimizes

  Bundlers can shrink our code and remove anything unnecessary, making it load faster for users.

#### **In short, bundlers involved to handle the growing complexity of javaScript applications. They support frameworks by taking care of dependency management, compiling code, and optimizing it for the broser.**

## Single-SPA vs Webpack

- Both are bundlers and does almost same task. But both are slightly different from each other.
- Both Single-SPA and Webpack is used for building micro-frontend application.

**Difference**

- Webpack's module federation feature enables to combine all micro-frontend application into a single application that serve as a main-website.

  - But the condition is every micro-frontend should based on a single framework.

- On the other hand Single-SPA is mainly focused to build micro-frontend application and it allows to combine all micro-frontend into a single application and serve as a main-website.
  - It dosen't matter which framework is used for building the micro-frontend application.
  - One of the best part of the Single-SPA is the feature which enables to combine all micro-frontend without knowing it's technology on which it builds.

## How bundler helps to take one step ahead into production journey

_helper :: ChatGPT_

Let’s clarify how bundlers work for deployment and how hosting platforms handle bundled files.

### 1. **Deployment Output (dist Folder)**

- When a bundler like Webpack, Vite, or Parcel runs, it compiles, bundles, and optimizes your project files. The output is typically stored in a **`dist`** (short for "distribution") folder. This folder contains everything needed to deploy your app.
- The contents of the `dist` folder can vary, but you’ll typically see:
  - A **`main.js`** or similar JavaScript file (sometimes split into multiple files for larger apps).
  - An **`index.html`** file, which is the entry point that loads the bundled JavaScript.
  - **CSS files**, images, and other assets as needed.

### 2. **Using the dist Folder for Deployment**

- For deployment, you upload everything in the `dist` folder to your hosting provider.
- The `index.html` file is the first file the hosting provider loads. This file includes references to the bundled JavaScript and CSS files, so it knows how to load the app.

### 3. **How Hosting Providers Handle the Bundled Files**

- Hosting providers can easily handle multiple files in the `dist` folder. They don't necessarily expect one single file; they simply serve whatever is in the folder, starting with `index.html`.
- The **bundled JavaScript file** (or files) includes all the code needed for your app, and browsers know how to interpret it. The HTML file links to these bundles, so everything works together.

### 4. **Why a Single File Isn’t Always Used**

- In practice, bundlers often create **multiple files** rather than one single file. For example, they may split JavaScript into smaller "chunks" to load only what's needed at a given moment (called **code splitting**). This improves performance, especially in larger applications.
- Hosting platforms support this by loading only the necessary chunks based on user interactions.

So, to summarize:

- You deploy the **entire `dist` folder** to the hosting provider.
- The **`index.html`** file loads everything else and coordinates the app.
- Even though bundlers can create a single bundled file, they usually split it up for better performance, and hosting providers can handle these multiple files without issue.

## After compilation, the job of bundler is done and the dist folder is now independent and ready to execute within the browser?

_helper :: ChatGPT_

Yes, exactly! After the bundler completes its job and outputs the `dist` folder, the files within this folder are **self-contained and ready to run in the browser**. Here’s how it works:

1. **Independent Files**: The `dist` folder contains everything your application needs: HTML, CSS, JavaScript, and any assets (like images or fonts).
2. **Browser Compatibility**: The bundler ensures that code is compatible with most browsers. It does this by transpiling modern JavaScript (or TypeScript, JSX, etc.) into plain JavaScript that browsers understand.

3. **Optimized for Execution**: Bundlers also minify and optimize the files to improve loading and runtime performance. This means the browser can efficiently execute them without needing the original source code.

Once the bundler is done, you can simply upload the `dist` folder to any hosting provider, and the browser will take over from there by loading and executing the app based on the files provided.
