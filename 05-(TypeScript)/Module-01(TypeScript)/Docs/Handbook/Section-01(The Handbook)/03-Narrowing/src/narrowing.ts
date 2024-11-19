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