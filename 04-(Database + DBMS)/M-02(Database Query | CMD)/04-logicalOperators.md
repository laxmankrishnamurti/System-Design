# Logical Operators

This is used like conditional statements where we'll check wheter data should full-fil the condition or not. If the condition matched, the query will execute and return those data.

There are four types of logical operators in mongodb :-

- **1. and**
- **2. or**
- **3. not**
- **4. nor**

```bash
# and operator (all condition should be true)
$ db.<collection-name>.find({$and: [{condition-1 with key value, can be nested condition}, {condition-02}, {condition-03}, ......n]})
$ db.<collection-name>.find({$and: [{name: 'laxman'}, {age: {$gt: 20}}, {condition-03}, ......n]})

# or operator (atleast one condition should matched)
$ db.<collection-name>.find({$or: [{name: 'laxman'}, {age: {$gt: 20}}, {condition-03}, ......n]})

# nor operator (Except that condition, return all)
$ db.<collection-name>.find({$nor: [{name: 'laxman'}, {age: {$gt: 20}}, {condition-03}, ......n]})

# Show all results that will not satisfy that following condition
$ db.<collection-name>.find({price: {$not: {$eq: 100}}})
```
