type CallbackFunctionType = (a: string) => void;

function parent1(fn: CallbackFunctionType){
    fn("More on Functions")
}

function child1(str: string){
    console.log(str)
}

parent1(child1)

console.log("CALL SIGNATURE")

type CallbackFunctionTypeWithAdditionalProperties = {
    description: string;
    result: string
    (num: number): boolean;
}

function parent2(fn: CallbackFunctionTypeWithAdditionalProperties): boolean{
    const result = fn(1000)
    console.log("Callback function description :: ", fn.description)
    console.log("Test Result", fn.result)
    return result
}

function child2(num: number){
    const randomNumber = Math.floor(Math.random() * 1e2)
    return num > randomNumber
}

child2.description = "Calling from child2 function"
child2.result = "All test cases passed!!"

const result = parent2(child2)
console.log("result", result)

console.log("CONSTRUCT SIGNATURE")

interface User {
    accountId: string;
    userEmail: string;
    ipAddress: string;
}

type SomeConstructor = {
    new (username: string): User | false;
}

function parent3(fn: SomeConstructor){
    const userDetails = new fn("laxmankrishnamurti")
    return userDetails
}

function child3 (username: string): User | false{
    if(username === "laxmankrishnamurti"){
        return {
            accountId: "12345",
            userEmail: "laxmankrishnamurti@gmail.com",
            ipAddress: "192.168.250.26"
        }
    }

    return false;   // user dosen't exist 
}
interface User {
    accountId: string;
    userEmail: string;
    ipAddress: string;
}

interface SomeConstructor1 {
    (num: number): boolean; // Callable signature
    new (username: string): User | boolean; // Constructor signature
}

function paren4(fn: SomeConstructor1){
    // Passing an argument of type number to fn matches it against the first definition in the SomeConstructor1 interface
    const result = fn(1000);

    // Passing an argument of type string to fn matches it against the second definition in the SomeConstructor1 interface
    const user = new fn("laxmankrishnamurti");

    if(result){
        return result
    }else {
        return user
    }
}


// Use a Proxy to define a constructible and callable object
// const child4: SomeConstructor1 = new Proxy(function () {}, {
//     apply(target, thisArg, argArray) {
//         const num = argArray[0];
//         if (typeof num === "number") {
//             const randomNumber = Math.floor(Math.random() * 1e2);
//             return num > randomNumber;
//         }
//         throw new Error("Invalid argument for call");
//     },
//     construct(target, argArray) {
//         const username = argArray[0];
//         if (typeof username === "string" && username === "laxmankrishnamurti") {
//             return {
//                 accountId: "12345",
//                 userEmail: "laxmankrishnamurti",
//                 ipAddress: "192.168.250.16",
//             };
//         }
//         return false;
//     },
// });

// Call the function with `paren4`
// const output = paren4(child4);
// console.log("Output:", output);


// function child4(input: number | string): boolean | User {
//     if(typeof input === "number"){
//         const randomNumber = Math.floor(Math.random() * 1e2)
//         return input > randomNumber
//     }else if(input === "laxmankrishnamurti"){
//         return {
//             accountId: "12345",
//             userEmail: "laxmankrishnamurti",
//             ipAddress: "192.168.250.16"
//         }
//     }

//     return false
// }

// const output = paren4(child4)


