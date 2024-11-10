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

// generics with interface 

interface Authentication<Type>{
    generateAccessToken: (credentials: Type) => void;
    getRefreshToken: () => Type;
}

//This is a shortcut to tell TypeScript there is a constant called _assignAuthenticationType_, and you don't have to worry about where it came from. 

// If we don't use the declare keyword it would ask for values to be initialized. Like this :- 'const' declarations must be initialized.

// declare const assignAuthenticationType: Authentication<string>;

// // Now, after assigning the type of the interface we can use both methods. 

// assignAuthenticationType.generateAccessToken("laxmankrishnamurti");

// // Warn :- Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// // assignAuthenticationType.generateAccessToken(22);

// const accessToken = assignAuthenticationType.getAccessToken()
// console.log("type of accessToekn is", typeof accessToken)

// let's implement the Authentication interface

const authenticationFeature: Authentication<string> = {
    generateAccessToken: (credential: string) => {
        console.log(`Access token is generated for ${credential}`, String(Math.ceil(Math.random()*1e10)))
    },
    getRefreshToken: () => {
        return String(Math.ceil(Math.random()*1e10))
    }
}

console.log("generatedAccessToken", authenticationFeature.generateAccessToken("laxmankrishnamurti"));
console.log("generatedRefreshToken", authenticationFeature.getRefreshToken())

// Defining a generic type for array

type DynamicArray<T> = T[]

const freedomFighters: DynamicArray<string> = ["Bhagat Singh", "Shukhdev", "Batukeshwar dutt", "Azzad", "Pritilatta wadedar", "Kalpana dutt", "Vinoy basu", "Khudiram bosh"]

console.log("freedomFighters", freedomFighters)
console.log("typeof freedomFighters", typeof freedomFighters)

const myMatriculationMarks: DynamicArray<number> = [75,85,89,91,93,95]

console.log("myMatriculationMarks", myMatriculationMarks)
console.log("type of myMatriculationMakrs", typeof myMatriculationMarks)

const isLoggedInStatus: DynamicArray<boolean> = [true, false, false, false, false, true, true, false, false, false, false, false, true, true]

console.log("isLoggedInStatus", isLoggedInStatus)
console.log("type of isLoggedInStatus", typeof isLoggedInStatus)