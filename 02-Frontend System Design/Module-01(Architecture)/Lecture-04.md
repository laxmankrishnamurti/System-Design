# Network Optimization

## 1. Load JavaScript Asynchronously

In HTML file we attach lots of javascript file and when the page is encountered by the browser it starts parsing the HTML page and when it see the script tag it stop the parsing and starts downloading the javascript file and then then it is going to execute the javascript code between downloading and executing the file browser stop parsing and when execution is done it resume the parsing. This is the default behaviour of any browser. This may be create problems because think about the scenario where javascript code is targeting a specific HTML tag and the tag is under the body tag and because browser has no access of that particular HTML tag because it is not parsed yet and the code is using the tag it will throw error. And one of the biggest problem with this is client dosen't see anyting on the web page until unless the whole javascript code is not executed.

- This default behaviour may help us in such scenarios, like:
  - To download fonts
  - To download static CSS file
  - To download icons
  - ...........etc

These are the three ways we can put JavaScript file into the HTML page

```html
<script src="./script.js"></script>
<script src="./script.js" async></script>
<script src="./script.js" defer></script>
```

<code>How these three attached file is going to be treated by the browser</code>

1. _first_

   - Browser stopped the parsing immediately
   - Download the JavaScript file
   - Excecute the code
   - Client dosen't see anything until or unless the code will not executed.

2. _second_

   - Broser will not stop the parsing but it starts downloading the file parallely
   - Once the file is downloaded browser immediately stop the parsing and starts executing the code
   - When the execution get done the browser will start the parsing from where it stopped.
   - If downloading time is high the client may be see some amount of content on the web page but when the browser starts executing the code the remain page will look like blank because browser is busy to executing the code so that's why it cannot able to paint the web page.

3. _third_
   - Browser parsed the whole HTML page and when it encounter a script tag it will start downloading the file parallely
   - Once is parsing is completed browser starts executing the javascript code
   - The content of the page will be visible to the client as soon as possible

Choosing a perfect method to attach the javascript file into the HTML page is totally depends upon our use cases. Nothing is bad or good it's totally depends upon use cases. let say if we have used fonts on the web page we make sure it first downloaded and then parsing will continue and generally such files will not take too much time so this is what i'm trying to say it's totally up to us what's are the requirement and based on this we can choose the method that suit in our use cases.

<code>We also attach javascript file in to the bottom of the page to optimize performance. With this we have four methods. In this methods client will see the whole content of the web page because browser dosen't have to download or execute any javascript code because we have attached all js file into the bottom of the page and after parsing all content of the page and when it encounter script files it will treat the file as same as they have done before with the other js file.</code>

## 2. Lazy Loading

In a web page there are lots of things that takes time to load on the web page and this will hamper our website performance. Here are some better ways to improve our application performance.

1. _Lazy attribute_

It is commonly used in the image, iframe, and video section which is on the viewport and not on the viewport. Basically, with the lazy attribute we can load our content based on viewport. User can only see the image which is on the viewport and cannot see the image which is not on the viewport so basically what we are trying to do is we are going to load an image in faster way which is on the viewport and the image or the iframe, or the video will load slowly which is not on the viewport.

```html
<!-- The image which is not on the viewport -->
<img src="./profile.png" loading="lazy" />

<!-- We want to render it as soon as possible -->
<iframe loading="eager" path="xxxxxx"></iframe>

<!-- This is quire similar to eager loading but has less priority than eager loading but higher priority than lazy loading -->
<img src="./profile.png" fetchPriority="low" />
```

2. _Intersection Observer_

This is also a good way to improve performance of the application. With this methods we actually try to load content based on intersection. It means let say there is a container which has 500px of height and we below this there is also an another container which has same height and we wanted to load the second container's file or content when user see the 50% of height of the frist container. So, whenever user reach the 250px of height of the first container we can take some actions based on this intersection. This is mosly used in today's web application to improve performance of the application and give a better user experience.

```js
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function callbackFunction(entries) {
  //Array of observing elements
  entries.forEach((entry) => {
    //Perform some actions based on the intersection
  });
}

let observer = new IntersectionObserver(callbackFunction, options);
observer.observe(TARGET_ELEMENT);
```

3. _Content-Visibility_

By adding this small line of CSS can improve our website performance. It is quite similar to lazy loading but it is more than that. The CSS property is:-

```css
.story {
  content-visibility: auto;
  content-intrinsic-size: 1000px; /* Optional */
}
```

This will not going to load the content which is not visible on the viewport until user scrolling down and reach to that particular container or box. This helps a lot to reduce rendering time.

4. _Serving Critical CSS_

CSS file can also impact on rendering process like JavaScipt file. These are the two way to optimize the CSS loading :-

```html
<!-- Load critical css (navbar, sidebar) Synchronously -->
<link rel="stylesheet" href="critical.css" />

<!-- Load css asynchronously with low priority -->
<link
  rel="stylesheet"
  href="full.css"
  media="print"
  onload="this.media='all'"
/>
```

## 3. Resource Hinting

We provide hints to the browser such as what are the resources are going to be used in this web application, so that browser can more optimize the application.

1. _preload_

With this hint we are telling the browser before rendering anything just go to the resource and fetch the data and after that starts rendering the web page because the data you have loaded before rendering is going to be used just few miliseconds.

```html
<link rel="preload" href="/chunk.elak232kjh3sdkdhrwr.js" as="script" />
<link rel="preload" href="/criticalStyles.css" as="style" />
```

- Fetched
- Executed

2. _prefetch_

It is same as _preload_ but this attribute prevent the browser to execute the resources that he fetched.

```html
<link rel="prefetch" href="/chunk.elak232kjh3sdkdhrwr.js" as="script" />
<link rel="prefetch" href="/criticalStyles.css" as="style" />
```

- Fetched
- Stored in cache memory
- Execute when required

3. _preconnect_

With this we try to make a handshake with our backend so it can save our time to avoid unnecessary introduction.

```html
<link rel="preconnect" href="https://backend.shopi.com" />
```

4. _dns-prefetch_

The _preconnect_ may not be available in some browser so instead of this we can use this hint which is available in most browsers.

```html
<link rel="dns-prefetch" href="https://backend.shopi.com" />
```

5. _prerender_

With this we can prerender a webpage and create a hidden tab so that user dosen't have to wait too much. This is used where we are 100% sure about after this action user will try to visit the page.

For example, let say use had just login and after logging we must render the dashboard where use lands on. We can levarage the feature.

```html
<link rel="prerender" href="https://shopi.com/profile/dashboard" />
```

6. _modulepreload_

With this we can load modules before borwser starts rendering.

```html
<link rel="modulepreload" href="/static/header.js" />
<link rel="modulepreload" href="/static/logo.js" />

<!-- If module belongs to the service worker -->
<link rel="modulepreload" href="/static/header.js" as="serviceworker" />
```

## 4. Service Worker
