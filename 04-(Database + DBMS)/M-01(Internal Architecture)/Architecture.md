# MongoDB Architecture

[Source](https://www.geeksforgeeks.org/mongodb-architecture/)

- **MongoDB is a popular NoSQL document-oriented database management system**
- **Flexible, High performance, High availability, Multi-storage engines**
- **NoSQL mens Non-relational. It means that mongodb isn't based on a table-like relational database structure.**

## Key-features of MongoDB

**1. Document-oriented database**
**2. Stores data in BSON-like documents**
**3. Schema less database**
**4. It provides horizontal scalability with the help of _sharding_.**
**5. It provides high scalability and redundency with the help of _replication_.**
**6. It allows one to operform operations on the grouped data and get a single result or computed result using Aggregation pipeline.**
**7. It has very high performance.**

[More about BSON](./bson.md)

## Does mongodb shemaless?

Yes, it does make sense to say that MongoDB is _schemaless_, but here’s how it works:

1. **MongoDB itself is schemaless**: MongoDB does not enforce a schema on the database level. This means that you can store any structure of data in any collection, and MongoDB won’t restrict the fields, data types, or structure of the documents. For instance, one document in a collection could have fields like `name` and `age`, while another document in the same collection could have completely different fields like `title` and `author`.

2. **Schemas in Node.js**: When you use Node.js with MongoDB, you’re often working with libraries like Mongoose. Mongoose allows you to define schemas in your application to provide structure and validation on the application side. This schema is _optional_ and exists only in your code; MongoDB itself doesn’t enforce it. Instead, Mongoose uses the schema to make sure data is consistent before saving it to the database.

So, MongoDB itself is technically _schemaless_, but many developers add schemas in their applications to manage data structure and consistency. This lets you take advantage of MongoDB’s flexibility while keeping your data organized.

## Horizontal scaling and Sharding

**Horizontal scaling** is when you add more machines (servers) to handle more data or traffic, instead of upgrading one machine. It’s like opening more checkout counters at a store when it gets busy, so customers can be served faster.

**Sharding** is a way to split up your database into smaller pieces, or "shards," and store them across multiple machines. Each shard holds only part of the data. So if you have 1,000,000 users, one shard might store users 1–500,000, and another shard stores 500,001–1,000,000. This way, no single machine has to handle all the data, which helps keep things fast as the database grows.

## Question ===> let say i have 1 million users data and there are lots data i need to store. so how can i design my database and it may possible that if a user is on one shard their respective data like other documents or collection may have on different shards so how do we manage these things?

When you have a large user base and lots of data, you can design your database in MongoDB using **sharding** to split the data efficiently and keep performance high. Here’s how you can design it:

### Step 1: Choose a Shard Key

- A **shard key** is the field that MongoDB uses to decide where to store each document.
- For example, if each user has a unique `userID`, you could use this as the shard key to spread users across shards. MongoDB will store documents based on this key.
- A good shard key should evenly distribute data and balance the workload. Avoid shard keys with values that "clump" data together (like a field with a small number of unique values).

### Step 2: Related Data in Same Shard (Avoid Cross-Shard Queries)

- To keep data related to each user together, design your collections to use **the same shard key** (like `userID`) wherever possible. This way, when MongoDB stores a user document on one shard, other related data for that user (like their posts, comments, etc.) can also be stored on the same shard.
- For example:

  - **Users Collection:** Sharded by `userID`
  - **Posts Collection:** Sharded by `userID`
  - **Comments Collection:** Sharded by `userID`

  By sharding these collections with `userID`, MongoDB tries to store all documents for each user on the same shard.

### Step 3: Handle Cases When Data is on Different Shards

- Sometimes, it’s not possible to keep all related data on the same shard, especially if you need to shard by different keys in different collections.
- MongoDB handles cross-shard queries automatically. If your query needs data from multiple shards, MongoDB sends requests to the relevant shards and combines the data. However, cross-shard queries are slower, so it’s best to minimize them when possible.

### Example Structure for Your Case

1. **Users Collection:** Stores user profiles, sharded by `userID`.
2. **Posts Collection:** Stores posts created by users, also sharded by `userID`.
3. **Friends Collection:** If you have a large list of friends, you may need a different shard key like `friendGroupID`, but try to structure it so most frequent queries don’t need to cross shards.

### Summary

- Use a **consistent shard key** across related collections.
- MongoDB will handle data retrieval across shards automatically, but design your schema to **minimize cross-shard queries** for better performance.
- Regularly monitor shard performance and adjust if needed (e.g., changing shard keys or rebalancing data across shards).

This way, even with a million users, your database remains fast and efficient as it grows!

## Mongodb architecture

The internal architecture of MongoDB is designed to efficiently handle large amounts of data and provide flexibility and high availability. Here’s a simplified breakdown:

### 1. **Database Structure: Documents and Collections**

- **Document**: The basic unit of data in MongoDB, stored in **BSON** (Binary JSON) format. Each document contains fields and values, similar to a JSON object.
- **Collection**: A group of documents. Collections in MongoDB are analogous to tables in relational databases, but they don’t enforce a fixed schema.

### 2. **Components of MongoDB Architecture**

MongoDB's architecture includes several key components:

#### a. **Sharding**

- **Sharding** is MongoDB’s method for horizontal scaling. It allows large data sets to be divided across multiple machines, each holding a subset of the data.
- MongoDB uses a **shard key** to decide how to split the data. The data is divided into **chunks** based on this key, and chunks are then distributed across different **shards**.
- Each **shard** is a MongoDB instance (or replica set), holding part of the overall data.

#### b. **Replication**

- MongoDB uses **replication** to ensure high availability. It does this with **replica sets**, which are groups of MongoDB servers that contain the same data.
- A **primary node** handles all write operations, while **secondary nodes** replicate the primary’s data.
- If the primary node fails, MongoDB automatically promotes a secondary to primary, providing redundancy and preventing downtime.

#### c. **Config Servers**

- Config servers store metadata and routing information about the sharded clusters.
- They manage the sharding configuration, helping the **mongos** process (see below) locate data across the shards.
- Typically, there are multiple config servers (usually three) for fault tolerance.

#### d. **Mongos (Query Router)**

- **Mongos** is a routing layer that connects applications to the correct shards.
- When a client requests data, the **mongos** server looks at the shard key and the config server metadata to route the request to the appropriate shard.
- This allows the application to interact with the sharded data as if it were a single, unified database.

### 3. **Storage Engine**

- MongoDB’s **storage engine** handles how data is stored on disk. MongoDB supports multiple storage engines, like **WiredTiger** (default) and **MMAPv1**.
- The **WiredTiger** engine provides efficient storage, data compression, and concurrent read-write operations.

### 4. **Indexes**

- MongoDB supports indexes for faster query performance. Indexes are structures that MongoDB maintains to help quickly locate documents in a collection.
- You can create different types of indexes (e.g., single-field, compound, geospatial, etc.) based on your application’s needs.

### 5. **Journaling**

- Journaling provides data durability by recording write operations in a log before applying them to the actual data. This ensures that in case of a crash, the database can recover to a consistent state.

### Summary of Data Flow in MongoDB

1. **Client Request**: A client sends a request (e.g., read, write).
2. **Mongos Routing**: For sharded clusters, the **mongos** routes the request to the correct shard(s) based on the shard key and config server metadata.
3. **Data Handling**: Each **shard** handles the request using its replica set for high availability.
4. **Response**: Data is fetched, combined if needed, and sent back to the client.

This architecture enables MongoDB to handle large-scale, distributed data while ensuring availability, fault tolerance, and high performance.
