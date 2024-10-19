# REST API | Microservices Architecture

1. Web application ===> A web application is a website in which contents are dynamic or interactive where user can perform CRUD operations by interacting with an interface.

2. Client ===> Who pushs a request to the server

3. Server ===> Systems that intercepts the reqeust and send appropriate messages to the client.
   - The server can acts as a client also when it is requesting information from other servers or replicas.

## What is required for communication to happen?

- Language independent
- Fast
- Enable communication over the network
- Light weighted

## REST API

A REST api provides all these features. It stands for _REpresentational state transfer_. This is a technique or style or a standard to provide those requirements.

REST api provides an end-point to fetch data over a network. Client hit the end-point to get or tranmit data to the server. The request can be one of these types:-

- GET
- POST
- PATCH
- PUT
- DELETE
- OPTIONS
- HEAD

Requirement to consume api ===> URI(end-point) + HTTP method

# Service Oriented Architecture

In this application architecture we break our application in small chunks to make them work independently.

## Advantages

- Selective scaling ===> One of the biggest key advantage of using the architecture is scaling the application is very easy process because all components of the application are running independently.

- Different Tech Stack ===> Because most of services are isolated therefore we can use multiple technologies.

- Loose coupling ===> Because of the isolation

- Agile ===> Agile simply means independent development.

## Disadvantages

- Higher latency
- Complex to secure
- Cascading failure
- Complex understanding

At some point a service may depends on another service.

# Microservices

This is extension of the SOA architecture. In this architecture every single component is independent. No any single component depends on others.

# Difference between SOA and Microservices architecture

<pre>
                    SOA                                     MICROSERVICES
    - Services can share data storage               - Each microservices has separate and                                               independent data storage
    - Less scalable architecture                    - Highly scalable architecture
    - Deployment is time-consuming                  - Deployment is easy and less time-consuming
    - Focused on maximizes application              - More focused on decoupling 
</pre>

# Tier Architecture

A web application can be designed according to the n-tier architecture where tiers are different layers of architecture.

A tier is a logical separation between different components of the application. To be more precise, we are actually trying to separate or combine these components :-

- Frontend
- Backend
- Database

## Different Tiers

- 1-Tier

  - All components are deployed on a single machine.
  - Single Machinge ===> Frontend, Backend, Database

- 2-Tier

  - First machine ===> Frontend
  - Sechon machine ===> Backend + Database

- 3-Tier
  - First machine ===> Frontend
  - Second machine ===> Backend
  - Third machine ===> Database
