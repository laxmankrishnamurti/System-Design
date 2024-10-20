# Micro Frontend Architecture

When i tried to start a project initially it looks good like initially is looks like simple, organized and easy to read but when i continue to start building the project without having the knowledge about the frontend system design, the component that was looking good previously it starts becoming complex and code get meshed and the readability of that code became very poor.

Actually i was trying to put everything in a single place this is what called _monolithic architecture_ that i was not know. The fact is that if we want to make a project which can scale it not possible in _monolithic architecture_. It can only scale if the system is designed based on _distributed system architecture_ where every component on the frontend is isolated.

But after watching the video about 4-5 minutes they introduce _micro frontend architecture_ and shared some knowledge about this then i realise that ooooo... this was the thing that is missing in my project and so that's why my code get bulky.

I think it's must to know for building projects in a scalable manner and this is what i should know to become a good frontend developer.

## Micro-Frontend Architecture Patterns

The term _micro_ means _the smallest part_. In frontend we have lots of components which will be rendered on the UI and may be a component is depending on some other component. In micro-frontend we try to achieve the isolation where each and every component of the system is isolated means it can build on different technologies, different design and have different kind of requirements. To be more precise in micro-frontend architecture we try to design our frontend system where each component is independent and will not affect and depend on someone and they work together and serve the application.

This is the main goal of designing _micro-frontend architecture_. Micro-Frontend can be designed, developed, and managed by a single team who has the expertise in the specific area or technologies.

- <code>How to achieve these things in technical terms</code>
  - Iframe
  - Web Components
  - Module Federation
  - MicroApps/Route based

## Communication Protocols

These are the three mostly used communication protocol on frontend.

1. Long polling (Bi-directional) ===> If user want to get more data from the server, it can not possible in the long polling communication to get entire data at once. Instead client can push a request to the server and whenever the data is ready, server will send the data to the client and then the client can push a new request to the server. This is how client can get the entire data that they want.

To be more precise in _long polling_ client continuously pushing a new request to the server until they will not get the entire data.

After client pushed a request, server will send the data automatically when it get ready and client dosen't need to push any extra request to the server.

<code>Uses :: Fetching data from the server (Default HTTP request)</code>

2. Web Socket ===> In web-socket connection client simply push a request to the server and server will keep sending the data untill it will not send all the data that client has reqeusted. Clint has to simply push a reqeust and server will take care of it.

Basically in web-socket connection client and server establish a persistent connection and once the connection is established both client and server can send data to each other any time. Server can send data to the client without waiting for client request and the connection will keep connected until the client will not disconnect the connection explicity.

- Client make first reqeust for handshake
- Handshake is completed (Protocol upgradation)
- Full-duplex communication

<code>Uses :: Real time communication</code>

3. Server Sent Event ===> In this web communication only server can send data to the client and client dosen't need to push any reqeust to the server.

<code>Uses :: Notification</code>

## Availability

We can provide offline support to our customer with the help of _service worker_ so that availability shoould be high.

## Accessibility

In the accessibility part we cover these things to improve our web apps for the client who are using the app :-

- Multi-language options
- Screen reader featrue for visually impared clients
- Contrast of the color which we used in the app for the people who have the vision correction disabilities.

## Consistency

Client may using different-different browsers which has different configuration and because of this nature our JavaScript code may not work properly on some other browser so should take care of it. To solve the problem we can have a design team who take care of it they set some guidelines and rules to design for designing the application which works on every browser smoothly. This is what we cover in Consistency.

<code>- Popular design system</code>

- Material UI
- Google
- Atlantean design system
- Fluent (By Microsoft)
- Semantic (By Amazon)

## Credibility & Trust

For a business perspective it's become must to gain credibility and trust from customers, for that we do SEO (Search engine optimization) of our web apps so that whenever a customer search for something which is releated to our business our application stand out on top of all other website so that we can gain more customers and enchange trust from user-side.

- There are two ways to do SEO

  1. On-Page

  - Title
  - Description
  - Meta
  - Content
  - Performace

  2. Off-Page

  - Backlinks (Mouth-advertising)
  - Ads

## Logging & Monitoring

In this section we monitor the application to check whether all are working fine or nor and user activity to track the user behavior.

- Error logging
  - Tool
    - Sentry
    - TrackJS
- User tracking
  - Amplitude
- User activity
  - Log rocket
- Feature usages
- Capacity monitoring

## Database/Caching

In this section we try to remove unwanted load from the server by caching the re-sent data in the memory and whenever user reqeust for same data server dosen't need to do all complex calculation that it has done previously. It simply check whether the data is available in the memory or not if yes, then it sent the data from the memory.

- HTTP caching

  - Static files
    - Images
    - Icons
  - CSS
  - JS

- In Memory caching
- Apollo Caching
- State management (Redux, Context API)
- Local Storage
- Session Storage
- Cookie
- IndexedDB

## Security

Making an application secure is a very crutial task because any one loop hole in the application cause system crashed. It means all of the actions which we have taken earlier dosen't make any sense if our application is not secure. So, its' must to secure our website from thse different types of attacks. These are :-

- DDOS Attack (Lots of reqeusts comes at the same time and our system get slow down or may be crashed)
- Authentication/Authorization
- Content Security Policy (anyone cannot clone our website on their own website. Like :- Iframe)
- Cross origin resource sharing (Other domain cannot request our server)
- Man in the middle (Before reaching the response to the client a middle man access those data)

## Performance & Optimization

In this section we make sure, we delivered the content that takes less time to reach to the client as much as possible. Deliver content as their priority order.

- Asset Optimization
- Blocking-NonBlocking actions
- Delivery option (What is the best way to deliver)
- Build assets
- Server-sent event
- Service worker
- Pre-received Performance

## Testing

- Unit testing
- Integration testing
- End-to-end testing

- _Tools_
  - Jest
  - Mocha
  - Selenium
  - Mocha
  - Chai
  - Playwright
