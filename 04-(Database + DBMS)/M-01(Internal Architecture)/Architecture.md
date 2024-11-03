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
