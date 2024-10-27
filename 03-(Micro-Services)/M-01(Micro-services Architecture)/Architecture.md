# Micro-services architecture

1. **In micro-services architecture we split our backend application into multiple parts and each of them has it's own responsibility in the whole eco-system. Each of them can be isolated, technology independent, and may have their own database for manage the application efficiently.**

   Ex :- Let say we are going to create an e-commerce application then we can divide the backend application for the application into multiple chunks or we can say multiple services and each service is called as "micro-services". The services would be :-

   - User service which handles user account activity like :- Account creation, deletion,.....etc
   - Authentication service
   - Product listing
   - Product searching
   - Product recommendation
   - Cart page
   - Checkout page
   - Payment
   - ...........etc

2. **Setup environment and install necessary packages as we generally do before for setting up the backend stage**

3. **Build Micro-Frontend services**

   - As we know micro-services are technology independent so must keep in our mind the directory structure of diffrent micro-services can vary according to their technology which is used to build the micro system.

   ## **Typical folder structure of a micro-service in Node.js**

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

   ***

   There are also lot more things such as :-

   - CMD
   - AWS Services
   - and many more

   ***

   **_Essential_**

   ***

   - Security
   - Logging & Monitoring

   **May have it's own database collection.**

   _after this, is a part of DevOps journey where we try to deploy our application to the end users._

4. **Containerize the micro-service and expose them all so that each container can communication with each other.**

   - Docker is one of the best tool for containerization

5. **Compose all micro-services into a single machine on cloud and use Orchestration tool such as Kubernetes to manage all micro-services**

   - Kubernetes is one of the best tool for orchestrating containers and thier replicas.

6. **Horizontally scale the could maching based on user traffic and use Load balancer to distribute loads among all machines.**
