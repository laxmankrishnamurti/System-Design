type SomeConstructor1 = {
    new () : {}
}

function constructorCaller(cons: SomeConstructor1){
    const constructorOutput = new cons()
    console.log("constructor output", constructorOutput)
}

class Class1 {
    constructor(){}
}

constructorCaller(Class1)

interface User {
    accountId: string;
    userEmail: string;
    ipAddress: string;
}

type SomeConstructor2 = {
    new (username: string) : User
}

function constructorCaller2 (cons: SomeConstructor2, username: string): User | string{
    const user = new cons(username);
    if(user){
        return user
    }else 

    return `${username} does not exist`
}

class Class2 {
    accountId;
    userEmail;
    ipAddress;
    constructor(username: string){
        //make db call
        if(username === "laxmankrishnamurti"){
            this.accountId = "12345";
            this.userEmail = "laxmankrishnamurti@gmail.com";
            this.ipAddress = "192.168.250.16";
        }
    }
}

const user = constructorCaller2(Class2, "laxmankrishnamurti");
console.log("user", user)

class Class3 {
    constructor(){
        return {
            message: "This is not an instance of the class"
        }
    }
}

const output = new Class3()
console.log("output", output)
console.log("instance of Class3", output instanceof Class3)

class Class4  {
    constructor(){
        return 4;
    }
}

const result = new Class4()
console.log("result", result)
console.log("result is an instance of Class4", result instanceof Class4)

type ErrorObject = {
    status: number;
    message: string;
}

class Class5 {
    accountId?;
    userEmail?;
    ipAddress?;

    constructor(username: string){
        if(username === "laxmankrishnamurt"){
            this.accountId = "678910";
            this.userEmail = "freelancing.laxman@gmail.com";
            this.ipAddress = "192.168.250.25";
        }else {
            // Explicitly return a non-instance object
            // return {
            //     status: 404,
            //     message: `${username} does not exist!!`
            // }
        }   
    }

    isError?: boolean;
    status?: number;
    message?: string;

    getAccountId(): string {
        if(!this.accountId){
            throw new Error("Access denied: Invalid user")
        }
        return this.accountId
    }
}

// const user2 = new Class5("laxmankrishnamurti")
// console.log("user2", user2)
// console.log("user2 accountId", user2.getAccountId())
