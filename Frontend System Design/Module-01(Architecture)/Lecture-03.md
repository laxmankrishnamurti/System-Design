# Micro Frontend Architecture

When i tried to start a project initially it looks good like initially is looks like simple, organized and easy to read but when i continue to start building the project without having the knowledge about the frontend system design, the component that was looking good previously it starts becoming complex and code get meshed and the readability of that code became very poor.

Actually i was trying to put everything in a single place this is what called _monolithic architecture_ that i was not know. The fact is that if we want to make a project which can scale it not possible in _monolithic architecture_. It can only scale if the system designed based on _distributed system architecture_ where every component of the frontend system is isolated.

But after watching the video about 4-5 minutes they introduce _micro frontend architecture_ and shared some knowledge about this then i realise that ooooo... this is the thing which is missing in my project and so that's why my code get bulky.

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

1. Long polling ===> If user want to get more data from the server, it can not possible in the long polling to get data at once. Instead client can push a request to the server and whenever the data is ready, server sent the data to the client and the client can push a new request to the server. This is how client can get all the data that they want.
