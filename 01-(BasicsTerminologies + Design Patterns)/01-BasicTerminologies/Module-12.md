# What is load balancer and how it works?

Load balancing is a process of efficient distribution of network traffic across all nodes in a distributed system, the component in the system that does the task is called load balancer.

# Roles of load balancer

1. The load distribution is equal over every node.
2. Health check. (If a node is not operational, the reqeust is passed to another node.)
3. It ensures high availability, high throughput, and high scalability.

# When to use and when not.

In monolithic system we don't need to use any kind of load balancer because all the components, modules,.....etc are in the same place. On the other hand, in distributed or micro-services system there are multiple replicas of the same system and all does the same task so it can handle millions of reqeusts at a same time so it must require to use load balancer for distributing all network reqeusts on different-different replicas. Hence, it helps of achieve high throughput, high availability, and reduce response time which make good user experience.

# Challenges of load balancing.

It has single-point of failure ===> During a load balancer malfunctioning, the communication between client and server would be broken. To solve this issue, we can use redundency.

The system can have a active load balancer and a passive load balancer.

# Advantages of using load balancer.

1. Optimization ===> Resource utilization ===> Reduce response time
2. Better user experience ===> High availability
3. Prevents downtime
4. Flexibility ===> Load balancer can re-route the traffic in case of any breakdown and work on server maintenance to ensure efficiency.
5. Scalability
6. Redundency

# Load balancing algorithm

1. Round Robin (Static) ===> Rotation fashion.
2. Weighted Round Robin (Static) ===> Rotation fashion based on server capacity.
3. IP hash algorithm (Static) ===> The servers have almost equal capacity, and the hash function(input is source IP) is used for random or unbiased distribution of requests to the nodes.
4. Source IP hash (Static) ===> Combines the server and client source and destination IP addresses to produce a hash key. The key can be used to determine the reqeust distribution.
5. Least connection algorithm (Dynamic) ===> Client reqeuests are distributed to the application server with the least number of active connections at the time the client reqeust is received.
6. Least Response time (Dynamic) ===> The reqeust is distributed based on the server which has the least response time.
