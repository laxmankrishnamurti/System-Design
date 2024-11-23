# Construct Signature

The word _construct_ refers to the _constructor function_ which is responsible for creating an object or an instanc of a class. (as simple as that)

And the word _signature_ refers to the definition or the description about the constructor function which constructor function needs to adhered.

Means, the word _constructor signature_ is a contract that constructor function needs to follow. What does it mean by that? Lets take an example:

```ts
//contract
type SomeConstructor1 = {
  new (): {};
};
```

```ts
function constructorCaller(cons: SomeConstructor1) {
  const constructorOutput = new cons();
  console.log("constructor output", constructorOutput);
}

class Class1 {
  // contract fulfilled
  constructor() {}
}

constructorCaller(Class1);
```

Now, it's time to test the contract result

```bash
tsc --noEmitOnError constructorSignature.ts
```

```bash
# Output

constructor output Class1 {}
```

Lets make some advance contract

```ts
interface User {
  accountId: string;
  userEmail: string;
  ipAddress: string;
}

type SomeConstructor2 = {
  new (username: string): User;
};
```

This contract says that any if you are going to use me to validate your constructor this must callable with _new_, accept a parameter type of string, and return an object which shape should be as equal to the _User interface_.

It looks like, sort of an advance contract. right! lets use this and create the constructor which will adhere the contract.

```ts
function constructorCaller2(
  cons: SomeConstructor2,
  username: string
): User | string {
  const user = new cons(username);
  if (user) {
    return user;
  } else return `${username} does not exist`;
}

class Class2 {
  accountId;
  userEmail;
  ipAddress;
  constructor(username: string) {
    //make db call

    // contract fulfilled
    if (username === "laxmankrishnamurti") {
      this.accountId = "12345";
      this.userEmail = "laxmankrishnamurti@gmail.com";
      this.ipAddress = "192.168.250.16";
    }
  }
}

const user = constructorCaller2(Class2, "laxmankrishnamurti");
console.log("user", user);
```

Now, its time to test the constructor.

```bash
# Output

user Class2 {
  accountId: '12345',
  userEmail: 'laxmankrishnamurti@gmail.com',
  ipAddress: '192.168.250.16'
}
```

### Note

The constructor of the _Class2_ is returning an object implicitly. But a constructor could return an object explicitly. But the question is if a constructor returns an object explicitly then does this will be the instane of the class?

The answer is _no!_

Why?

Because when we call a class with _new_ keyword it will return an object this could be an instance of the class and may not.

Have a look on this code:

1. **Returning an custom object**

```ts
class Class3 {
  constructor() {
    return {
      message: "This is not an instance of the class",
    };
  }
}

const output = new Class3();
console.log("output", output);
console.log("instance of Class3", output instanceof Class3);
```

```bash
output { message: 'This is not an instance of the class' }
instance of Class3 false
```

2. **Returning an primitive value**

```ts
class Class4 {
  constructor() {
    return 4;
  }
}
```

```bash
# Output

result Class4 {}
result is an instance of Class4 true
```

_If constructor returns a primitive (e.g., a string, numbre, or boolean), the return value is ignored, and the **new** call returns the class instance as usual._

Now the question is can be do like this:

```ts
type ErrorObject = {
  status: number;
  message: string;
};

class Class5 {
  accountId?;
  userEmail?;
  ipAddress?;

  constructor(username: string) {
    if (username === "laxmankrishnamurt") {
      this.accountId = "678910";
      this.userEmail = "freelancing.laxman@gmail.com";
      this.ipAddress = "192.168.250.25";
    } else {
      // Explicitly return a non-instance object
      return {
        status: 404,
        message: `${username} does not exist!!`,
      };
    }
  }

  isError?: boolean;
  status?: number;
  message?: string;

  getAccountId(): string {
    if (!this.accountId) {
      throw new Error("Access denied: Invalid user");
    }
    return this.accountId;
  }
}

const user2 = new Class5("laxmankrishnamurti");
console.log("user2", user2);
console.log("user2 accountId", user2.getAccountId());
```

_absolutely not!_

Because TypeScript doesn't allow to explicitly return an about that is not an instance of the class (Class5 in this case).

```bash
Return type of constructor signature must be assignable to the instance type of the class.ts(2409)
```
