function sayHello(person: {name: string; age: number}){
    console.log(`Hello ${person.name}`)
}

interface Person {
    name: string;
    age: number
}

function sayHello1(person: Person){
    console.log(`Hello ${person.name}`)
}

type Person1 = {
    name: string;
    age: number
}

function sayHello2(person: Person1){
    console.log(`Hello ${person.name}`)
}

console.log("OPTIONALE PROPERTY")

interface Person2  {
    name: string;
    age: number;
    email?: string; 
    mob?: number; 
}

function fetchAccountDetails({name = "laxman", age = 22, email = "demo@gmail.com", mob = 8252}: Person2){
    if(email === "demo@gmail.com"){
        return "Oops! This is a Demo account!"
    }
}

console.log("READONLY PROPERTY")

interface Person3{
    readonly name: string;
    age: number;
}

const Person3: Person3 = {
    name: "Laxman Krishnamurti",
    age: 22
}

// Person3.name = "Harshad Mehta" 
//Warning:  Cannot assign to 'name' because it is a read-only property.ts(2540)

interface Person4 {
    readonly name: {
        firstName: string;
        lastName: string;
    };
    age: number;
}

const Person4: Person4 = {
    name: {
        firstName: "Laxman",
        lastName: "Krishnamurti"
    },
    age: 22
}

// Person4.name = {}
// Warning: Cannot assign to 'name' because it is a read-only property.ts(2540)

Person4.name.firstName = "Harshad"
Person4.name.lastName = "Mehta"

console.log("Person4", Person4)

// Person4 { name: { firstName: 'Harshad', lastName: 'Mehta' }, age: 22 }

interface Person5 {
    readonly name: string;
    readonly age: number;
}

interface Person6 {
    name: string;
    age: number;
}

const person5: Person5 = {
    name: "Laxman Krishnamurti",
    age: 22
}

const person6: Person6 = person5
console.log("person6 name", person6.name) // person6 name Laxman Krishnamurti
console.log("person6 age", person6.age)  //  person6 age 22