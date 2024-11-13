const marks: number[] = [85,75,91,92,89,95]
console.log("marks", marks)

const points: Array<number> = [0.5,0.2,0.3,0.8,0.9,1]
console.log("points", points)

function sayHello(name, date){
    console.log(`Hello ${name}, today is ${date}`)
}
sayHello("Laxman Krishnamurti", new Date())

function getIpAddress(): string {
    return "192.168.16.254"
}

const userIpAddress: string = getIpAddress()

// Anonymous function

const mixArr = ["laxman", 22, true]
mixArr.forEach((value) => {
    console.log("value is", value)
    // console.log(typeof value.toFixed(2))
})

const newMix = [22,32]
newMix.forEach(function (value){
    console.log("value is", value)
    console.log("typeof value is", typeof value)
    console.log("fixed value", value.toFixed(2))
})  


function logUser(obj: {name: string; email?: string}){
    console.log("LOGUSER CALLED")
    console.log("you registered email id is", obj.email?.toUpperCase());
    // console.log("you registered email id is", obj.email.toUpperCase());
}

logUser({name: "Laxman Krishnamurti"})

function showDetails(obj: {name: string; email?: string}){
    if(obj.email !== undefined){
        console.log("your registered email id is", obj.email)
    }
}

console.log("UNION")

function printId(id: |number | string){
    console.log("userid is ", id)
}
printId("lakdsj")
printId(22)

function welcomeKit(x: string[] | string){
    if(Array.isArray(x)){
        console.log(x.join(" "))
    }else {
        console.log(x.toLocaleLowerCase())
    }
}

console.log("TYPE ALIASES")

type User = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

function printUser(data: User){
    for(let key in data){
        console.log(`${key} : ${data[key]}`)
    }
}

printUser({
    name: "Laxman Krishnamurti",
    age: 22,
    isLoggedIn: true
})

console.log("INTERFACE AND TYPES")

interface Users {
    name: string;
}
  
  interface Book extends Users {
    author: string;
  }
  
  function getBook(data: Book): Book {
    return data;
  }
  
  const myBook = getBook({
    name: "KARMA: why everything you know about it is wrong",
    author: "Acharya Prashant",
  });
  console.log("Book name", myBook.name);
  console.log("Book name", myBook.author);

type Animal = {
    name: string
}

type Dog = Animal &  {
    legs: number
}

function getAnimalInfo(data: Dog){
    return data;
}

const myPet = getAnimalInfo({
    name: "Manohar",
    legs: 4
})
console.log(`${myPet.name} has ${myPet.legs} legs`)

console.log("DIFFERENCE")

interface RequestObj {
    origin: string;
}

interface RequestObj {
    ipAddress: string;
    // origin: number
}

const newRequestObj: RequestObj = {
    origin: "India",
    ipAddress: "192.168.12.254"
}
console.log("newRequestObj", newRequestObj)

// type Req = {
//     origin: string
// }

// type Req = {
//     ipAddress: string
// }

console.log("TYPE ASSERTION")

// const age = "22" as number

let username: "Harshad" = "Harshad"
username = "Harshad"
// username = "Laxman"

function literalTypes(name: "Laxman" | "Harshad" | "Sonu") {
    console.log("name", name);
  }

//   literalTypes("Rohit")

console.log("LITERAL INFERENCE")

const count = {
    counter: 0
}
count.counter++

// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");

const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method)

console.log("NON-NULL")

function functionOne(id: Number | null){
    console.log(id!.toFixed(3))
}

// functionOne(null)

console.log("ENUMERATION")

enum UserRole {
    Admin,
    Normal
}

function checkRole(role: UserRole){
    if(role === UserRole.Admin){
        console.log("Full access granted!")
    }else if(role === UserRole.Normal){
        console.log("You don't have permission to override the content of the file because you are a normal user")
    }else {
        console.log("Unknown user role! Please enter a valid role")
    }
}

const user: UserRole = UserRole.Admin
checkRole(user)

console.log("SYMBOL")

// // Define the structure of LOG_LEVEL with specific symbol types
// (() => {
//     const LOG_LEVEL = {
//         INFO: Symbol("info"),
//         WARN: Symbol("warn"),
//         ERROR: Symbol("error")
//     } as const;

//     type LogLevel = (typeof LOG_LEVEL)[keyof typeof LOG_LEVEL];

//     function log(message: string, level: LogLevel) {
//         if (level === LOG_LEVEL.INFO) {
//             console.log("Info:", message);
//         } else if (level === LOG_LEVEL.WARN) {
//             console.warn("Warning:", message);
//         } else if (level === LOG_LEVEL.ERROR) {
//             console.error("Error:", message);
//         }
//     }

//     log("This is an info message.", LOG_LEVEL.INFO);
// })();
