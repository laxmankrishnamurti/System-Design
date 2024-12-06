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