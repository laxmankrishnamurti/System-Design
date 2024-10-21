# What is Distributed System?

What we have seen in monolithic architecture is all modules are combined in a single codebase or a server and if any single module get fails it will affect the entire application it means it has a _single point of failure_.

To avoid such kind of problems, which is the biggest disadvantage for any application, we use distributed system. As per their name suggests that all modules are divided into different-different parts means some modules may have on different server and others are on the different server. It means if there is any error of any changes in a single module it will not affect the entire application and our application will still in running state.

**Definition** ===> _A distributed system is a collection of multiple indivisual system connected through a network that share resources, communicate and cordinate to achieve common goals._

## Advantages

- Horizontally scalable
- No single point of failure
- Low latency

## Disadvantage

- Complex architecture and design
- Additional management required
- Load balancing should must apply
- Difficult to secure
- Message may be lost in between nodes.
