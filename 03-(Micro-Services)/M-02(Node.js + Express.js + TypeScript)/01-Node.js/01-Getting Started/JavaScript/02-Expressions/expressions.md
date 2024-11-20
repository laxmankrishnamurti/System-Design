# JavaScript Expressions

Lets' revise all JavaScript operators, expressions and keywords.

## **Expressions and operators by category**

### **1. Primary Expressions**

These are the basic keywords and general expressions in JavaScript

1. **this**

   - This keyword is used to referes the current context

2. **Literals**

   - A statically assigned primitive values to a variable called literals

3. **[]**

   - Array used to store multiple values in a single variable

4. **{}**

   - Object used to store vlaues in the form of key-value pairs

5. **class**

   - Used to define a class

6. **function**

   - Used to write modular code which we can use in the multiple modules and also avoid code repetation.

7. **async function**

   - This is also a type of function but this function may takes time to fully execute because of network calls.

8. **/ab+c/i**

   - This is a regular expression that is trying to find a single _ab_ or more character in the form of proceesing tokens that ends up with _c_ and this is actually a case-sensitive because of the _i_ flag.

9. **`string`**

   - This is a new sytax to write a string this feature is introduce by ES2015.

10. **()**
    - This is used to group an expression like this :- (1 + 2 + 3)

### **2. Left-hand-side expressions**

This is not like a typical LHS expression like this

```js
let c = 2 + 3 * 5;
//finally c = 17
```

where c === LHS and 17 is the RHS

No LHS expressions means it is just used before. That's it.

1. **?.**

   - This is not a typical ternary operator this is actually mostly used in object to check whether an object's property is available or not which means say we are trying to access a key from an object that dosen't exist or we are not sure that whether the key is present or not. So, to avoid any kind of error we can take advantage of the _chaining operator_. If the property that we are trying to access dosen't exist it will return either _null or undefined_ rather than an error.

2. **new**

   - This is used to initiaze an object from a class. In other words, we can say this is used to create an instance of a class.

3. **new.target**

   - It is used to check whether a constructor or a class is called with _new_ keyword or not.
   - If it is, then _new.target_ referes to the constructor function or the class being called.
   - If not, it will be _undefined_

Means when we call a function with _new_ keyword it creates a new object and runs the constructor(sayHello function in this case) function in the context of that new object.
