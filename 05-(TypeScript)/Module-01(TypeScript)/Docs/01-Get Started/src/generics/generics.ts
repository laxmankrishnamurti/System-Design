const marks = Array<number>;
console.log("marks", marks)
console.log("does marks has type of array", Array.isArray(marks))

/**
 * Output 
 * marks [Function: Array]
 * does marks has type of array false
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ArrayOfObjects = Array<{
    name: string;
    age: number;
    isLoggedIn: boolean
}>

const users: StringArray = ["Laxman", "Pallavi", "Kawya"];
console.log("users type", typeof users)

const age: NumberArray = [22,23,24,25]
console.log("age type", typeof age)

const clients: ArrayOfObjects = [
    {
    name: "Laxman Krishnamurti",
    age: 22,
    isLoggedIn: true
}, {
    name: "Pallavi jain",
    age: 3,
    isLoggedIn: true
}, {
    name: "Kawya Krishnamurti",
    age: 6,
    isLoggedIn: true
}
]

console.log("clients", clients)
console.log("clients type", typeof clients)

// type GenericArray = Array<T>;