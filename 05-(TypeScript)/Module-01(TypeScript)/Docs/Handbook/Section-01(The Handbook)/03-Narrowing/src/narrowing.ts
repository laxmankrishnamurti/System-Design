function isEligibleForVoting(age: string | number){
    if(typeof age === "number"){
        if(age >= 18){
            console.log("Yes, Your are eligible for voting. You can vote. ")
        }else {
            console.log("Oops! since you are a teenager so you can't vote.")
        }
    }else {
        console.log("Voter age is", age)
    }
}

isEligibleForVoting("18")

function printAllUses(users: | string | string[] | null){
    if(typeof users === "object"){
        users?.forEach((user) => {
            console.log("user", user)
        })
    }else if(typeof users === "string"){
        console.log("users", users)
    }else {
        return false;
    }
}

console.log(printAllUses(null))

console.log("TRUTHINESS NARROWING")

console.log(Boolean("laxman"))
// console.log(!!"")
// console.log(!!"laxman")

function printAllUsess(users: string | string[] | null) {
    if (!users) {
      return "Invalid input";
    } else if(typeof users === "object"){
      users.forEach((user) => {
        console.log("user", user);
      });
    }
  }
  
//   printAllUsess(null);

interface Container{
    value: number | null | undefined
}

function getMultiply(obj: Container, factor: number){
    if(obj.value != undefined){
        return obj.value * factor
    }else {
        return "Invalid input"
    }
}

interface A { a : () => void}
interface B { b : () => void}
interface C { a? : () => void; c : () => void}

function takeInput(obj: A | B | C){
    if("a" in obj){
        console.log(obj)
    }else {
        console.log(obj)
    }
}

function checkLog(str: Error | string) {
    if (str instanceof Error) {
        console.log("error", str)
        throw new Error("Err: New Error");
    } else {
        console.log("new Error", str);
    }
}

let foo = Math.random() < 0.5 ? 10 : "Foo" 
foo = 1;
console.log("foo", foo)
foo = "FUBAR"
console.log("foo", foo)


function controlFlowAnalysis(){
    let foo: boolean | string | number;

    foo = true;
    console.log("foo", foo)

    if(Math.random() > 0.5){
        foo = 4;
        console.log("foo", foo)

        foo = "laxmankrishnamurti";
        console.log("foo", foo)
    }

    return foo
}

// lets filter car

type Animal = {
    name: string;
    sound: () => void
}

type Car = {
    name: string;
    drive: () => void
}

function isAnimal(obj: Animal | Car): obj is Animal {
    return (obj as Animal).sound !== undefined
}

function getCollection(){
    const obj1: Animal = {
        name: "Manohar",
        sound: () => "foo"
    }

    const obj2: Car = {
        name: "Scorpio",
        drive: () => "high-speed"
    }

    if(Math.random() < 0.6){
        return obj1
    }else {
        return obj2
    }
}

const collection: (Animal | Car)[] = [getCollection(),getCollection(),getCollection(),getCollection(),getCollection(),getCollection()];

console.log("collection", collection);

const collectionOfAnimal: Animal[] = collection.filter(isAnimal)
// const collection2: Car[] = collection.filter(!isAnimal)

const collectionOfCar: Car[] = collection.filter((ele): ele is Car => {
    return !isAnimal(ele)   
})

console.log("collection of Animals", collectionOfAnimal)
console.log("collection of Cars", collectionOfCar)

console.log("DISCRIMINATED UNIONS")

interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number
}

function getAreq(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius! ** 2
    }
}

interface Circle {
    kind: "circle";
    radius:number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Rectangle {
    kind: "rectangle";
    height: number;
    width: number;
}

type Shapee = Circle | Square | Rectangle;

function getArea (shape: Shapee){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
}

function getAreaOfShapes(shape: Shapee){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.sideLength ** 2;

        case "rectangle":
            return shape.height * shape.width;

        default:
            const _exhaustiveCheck: never = shape;
            throw new Error(`Unhandled shape kind ${_exhaustiveCheck}`);
    }
}