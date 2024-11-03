# What is BSON?

- **BSON stands for Binary JSON.**

- **It is a binary file format that is used to store serialized JSON documents in a binary-encoded format.**

- **It was developed in 2009 by MongoDB.**

- **MongoDB requires the data types that should achieve high data transformation. But JSON is not giving the throughput that mongoDB wants so they started creating its own specialized data types**

- **Hence, they developed the BSON data format to be used while transferring files over the network.**

- **Although the format was developed specifically for MongoDB, it can be used anywhere as per business requirements independently.**

```json
{
  "hello": "world"
}
```

```bson
\x16\x00\x00\x00             // Size of the Document
\x02                         // 0x02 = type String
hello\x00                    // field name
\x06\x00\x00\x00world\x00    // field value
\x00                         // Used to represent end of object
```

## Characteristics of BSON Documents

Following are the three main characteristics of BSON documents-

**1. Lightweight**

The term overhead during data transmission refers to the extra bits that are not necessary for transmission (like checksum, parity etc.). These bits are transferred along with data usually as a part of headers. BSON keeps spatial overhead to a bare minimum which allows it to be lightweight during transfer over any network.

**2. Traversable**

BSON was designed to be highly traversable in nature. It can be parsed easily and very quickly because it supports type and length encoding, thanks to its binary structure.

**3. Efficient**

BSON supports efficient data encoding and decoding. Data can be both encoded to and decoded from BSON very easily and quickly.

## BSON data types

<pre>
s.n         Data Type           Size(bytes)

1             byte                  1
2            int32                  4
3            int64                  8 
4            uint64                 8 
5            double                 8
6            decimal128             16
7            date                   8 
8            objectId               12
9            array             Based on data (For ex – A byte array uses 1 byte)
</pre>

## Disadvantage of using BSON

**_BSON supports fast traversal of the BSON document. In order to support it, BSON adds extra information (like the length of subobjects, etc.) to the document. In some cases, this leads to increase in the size of the document and decreases the efficiency when compared to JSON._**

Sure, here’s a simplified example:

### JSON Document

Imagine we have a JSON document:

```json
{
  "name": "Alice",
  "age": 30,
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
}
```

In JSON, there’s no extra information stored, just the data itself.

### BSON Document

In BSON, to make it faster to read through each part of the document, it adds extra information like the length of the `address` object. So the BSON document might look something like this (simplified):

```json
Document Length: 38 bytes
{
  "name": "Alice",
  "age": 30,
  "address": {
    Object Length: 20 bytes
    "city": "New York",
    "zipcode": "10001"
  }
}
```

Here, BSON has added the `Document Length` and `Object Length` fields. This extra information makes it faster to jump directly to parts of the document, but it also makes the document a bit bigger than JSON.
