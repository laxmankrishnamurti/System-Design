# JavaScript data types and data structures

Every programming language has built-in data structures, but these often differ from one language to another.

JavaScript is a _dynamic language_ with _dynamic types_.

- **_Dynamic Type Checking_**

  - Dynamic type checking is the process of verifying the type safety of a program at runtime.
  - Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

    ```js
    let foo = 42; // foo type : number
    foo = "bar"; // foo type : string
    foo = true; // foo type : boolean
    ```

## `1. Primitive values`

All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.

All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", so one has to use === null to test for null.

All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. For example, the Number object provides methods like toExponential(). When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead. However, accessing a property on null or undefined throws a TypeError exception, which necessitates the introduction of the optional chaining operator.

|   Type    | **`typeof` return value** | Object Wrapper |
| :-------: | :-----------------------: | :------------: |
|   Null    |         "Object"          |      N/A       |
| Undefined |        "undefined"        |      N/A       |
|  Boolean  |         "boolean"         |    Boolean     |
|  Number   |         "number"          |     Number     |
|  BigInt   |         "bigint"          |     BigInt     |
|  String   |         "string"          |     String     |
|  Symbol   |         "symbol"          |     Symbol     |

[Read More](<https://github.com/laxmankrishnamurti/Data-Structure-And-Algorithms-JS/tree/main/01-SammieBae(Reference%20Book)/Let's%20Start%20from%20scratch>)
