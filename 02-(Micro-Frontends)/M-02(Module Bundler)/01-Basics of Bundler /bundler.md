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
