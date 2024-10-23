# Micro Frontend Architecture

Frontend microservices, also known as Micro Frontends, apply the microservices philosophy to frontend development. Instead of a monolithic front-end, the application is split into smaller, independently developed, deployed, and maintained pieces, just like back-end microservices.

Each "micro frontend" can own a part of the user interface, which allows teams to independently work on different parts of a large UI. These micro frontends can communicate with each other but remain decoupled in terms of technology, deployment, and updates.

## Why should we learn about micro-frontends?

The answer is simple monolithic architecture is not very effective in terms of scalability, technology independency, performance, and not flexible and have single point of failure. On the other hand in micro-frontends each of them is independent, isolated, loosly coupled, scalable, flexible, technology independent and gives high performance.

**Key Principles of Micro Frontend Architecture**

1. **Independence** ===> Each frontend microservice is a self-contained unit. They may use different technologies, state management solutions, or even run as separate applications on subdomains.

2. **Integration** ===> A shell or root application integrates the micro frontends into a cohesive UI.

3. **Communication** ===> Micro frontends should be loosely coupled, and communication between them should happen using APIs, shared events, or messaging systems.

4. **Routing and Composition** ===> The root application or shell handles routing and composing various micro frontends into one UI.

## **Frontend Mircoservices Architecture Step-By-Step**

1. _Identify domains and split the frontend_
2. _Create indivisual Micro Frontend Projects_
3. _Defiine Communication Strategies_
4. _Micro Frontend Container(Root Application)_
5. _Deployment Strategy_

[Read](./Architecture.md)
