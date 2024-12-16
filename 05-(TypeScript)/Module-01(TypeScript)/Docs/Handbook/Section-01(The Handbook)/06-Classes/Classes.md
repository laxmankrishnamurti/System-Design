# `Classes`

We know that classes are blue-prints which are used to create multiple instances of that class which we call it as an "object". Classes define all behaviours and functionalities of that instance. It means Classes have all over control of the instance.

TypeScript adds type annotations and other syntax to allow us to express relationships between classes and other types.

## `1. Class Members`

Without members class is just an empty object.

1. **Fields**
   - Defines public writable property(values) on a class.
   - It can also have initializers.
     - The _=_ sign followed by a value, called initializer.
     - In short, an initilizer is the value assigned directly to a class field.
     - Initializers are assigned directly at the property declaration, while the constructor is where
       we can assign values programmatically when an instance is created.

_strictPropertyInitialization_ setting controls whether class fields need to be initialized in the constructor.

#### `TypeScript does not analyze methods we invoke from the constructor to detect initializations, because a derived class might override those methods and fail to initialize the members.`

This statement means that **TypeScript does not trust methods called from the constructor to properly initialize class properties**. This is because in a derived class (a class that extends another class), those methods can be overridden, and the overridden method might not behave as expected or might not initialize the required properties.

### Let’s break it down:

1. **What TypeScript wants**:

   - TypeScript expects all class properties (fields) to be properly initialized when an object is created.
   - This can happen:
     - **Directly in the field declaration** (using an initializer).
     - **Inside the constructor** (explicitly assigning a value).

2. **Why calling methods from the constructor is risky**:

   - If we call a method inside the constructor to initialize a property, that method could potentially be overridden in a derived class (a subclass).
   - The overridden method might:
     - Forget to initialize the property.
     - Do something unexpected, leading to an error.

   As a result, **TypeScript doesn’t analyze these method calls to ensure the properties are initialized**.

3. **Example**:

   ```typescript
   class Base {
     name: string;

     constructor() {
       this.initialize(); // Calls a method to initialize the 'name' property
     }

     initialize() {
       this.name = "Base Class"; // Sets the value of 'name'
     }
   }

   class Derived extends Base {
     initialize() {
       // Oops! Forget to initialize 'name'
       console.log("Derived class initialization, but 'name' is not set!");
     }
   }

   const obj = new Derived();
   console.log(obj.name); // Error! 'name' is undefined
   ```

   - Here, the `Base` class expects the `initialize` method to set the `name` property.
   - The `Derived` class overrides `initialize` and doesn’t set `name`.
   - The `name` property ends up being `undefined`, causing an issue.

4. **What TypeScript does instead**:

   - TypeScript doesn’t analyze the method `initialize` in the constructor.
   - It assumes that relying on such methods could lead to uninitialized properties in derived classes.
   - So, it requires we to **explicitly initialize properties either directly or in the constructor itself**, not through a method.

5. **Correct Approach**:
   To avoid this problem, initialize properties explicitly in the constructor or directly in the field declaration:

   ```typescript
   class Base {
     name: string;

     constructor() {
       this.name = "Base Class"; // Initialize directly in the constructor
     }
   }

   class Derived extends Base {
     // Derived can override methods safely now
   }
   ```

### Simplified Summary:

- TypeScript doesn’t trust methods we call from the constructor to initialize properties because those methods can be overridden in a subclass and fail to initialize the properties properly.
- Always initialize properties directly in the constructor or at their declaration to avoid such risks.

2. **readonly**

- This is a modifier.
- That prefixed fields.
- Prevents assignments to the field outside of the constructor.

3. **constructor**

- Class constructors are very similar to functions.
- That can take n numbers of arguments and assign all values to the respective fields.
- Way to do this:
  - type annotation without default values
  - with default values
  - With Constructor overloads that define all possible combination of the parameter list for the class.
