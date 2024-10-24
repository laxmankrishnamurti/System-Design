# Micro-services architecture

1. **In micro-services architecture we split our backend application into multiple parts and each of them has it's own responsibility in the whole eco-system. Each of them can be isolated, technology independent, and have their own database for manage the application efficiently.**

Ex :- Let say we are going to create an e-commerce application then we can divide the backend application into multiple chunks or we can say multiple services and each service is called as "micro-services". The services would be :-

- User service which handles user account activity like :- Account creation, deletion,.....etc
- Authentication service
- Product listing
- Product searching
- Product recommendation
- Cart page
- Checkout page
- Payment
- ...........etc

2. **Setup environment and install necessary packages**
3. **Build Micro-Frontend services**

   - Technology independent

   ## **Typical folder structure of a micro-service**

   - src
     - config
     - controllers
     - middlewares
     - routes
     - models
     - views
     - utils
   - app.ts
   - index.ts
   - .env
   - package.json
   - tsconfig.json
   - package.lock.json
   - DOCKER file

   **May have it's own database collection.**

4. **Containerize the micro-service and expose them all so that each container can communication with each other.**

5. **Compose all micro-services into a single machine on cloud and use Orchestration tool such as Kubernetes to manage all micro-services**

6. **Horizontally scale the could maching based on user traffic and use Load balancer to distribute the load from one machine to another**
