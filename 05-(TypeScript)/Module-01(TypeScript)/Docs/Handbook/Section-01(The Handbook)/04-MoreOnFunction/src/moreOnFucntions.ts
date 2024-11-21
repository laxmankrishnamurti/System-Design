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