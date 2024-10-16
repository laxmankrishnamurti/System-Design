# What is Monolithic Architecture?

Mono ===> single
Architecture ===> Internal design details of building the applications.

Any web-application has these three parts:-

- Frontend
- Backend
- Database

If all the components and functionalities of a project is deployed in a single codebase, then that is a "Monolithic Architecture".

## Advantanges

- Easy to start
- Required fewer network calls
- Easy to secure
- Integration testing is easier
- Less confusion

# Disadvantages

- In monolithic architecture, every module is combined in a single system, so if these is an error or bug in a single module, it can destroy the complete system.

- In monolithic architecture, whenever a single module is updated, the whole system needs to be updated to reflect the changes to the user. All modules are present in a single system and are connected to one another, so the whole system needs to be updated.

- In monolithic architecture, if these is any changes in a single modules's programming language or framework, it will affect the entire system. The entire system needs to be changed because every module is interlinked tightly coupled.

## Difference between wbsite and web apps.

1. Website ===> Read only

   - Ex :- Blogging website

2. Web Apps ===> Read + Write operation
   - Ex :- YouTube, Discord, Github, Reddit, ......etc
