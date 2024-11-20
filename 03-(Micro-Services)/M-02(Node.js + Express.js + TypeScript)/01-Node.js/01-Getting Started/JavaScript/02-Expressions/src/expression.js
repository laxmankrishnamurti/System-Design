console.log("PRIMARY EXPRESSIONS")

const person = {
    name: "Laxman Krishnamurti",
    age: 21,
    getUserAge: function(){
        return this.age
    }
}
console.log(person.getUserAge())

// new keyword
console.log("CLASS")

class User{
    username;
    age;

    constructor(username, age){
        this.username = username;
        this.age = age
    }
}
const user1 = new User("Laxman Krishnamurti", 21)
console.log("user1", user1)

// new.target
console.log("new.target")

function sayHello(){
    return "Hello!"
}

const obj = new sayHello()
obj.name = "Laxman Krishnamurti"
console.log(obj)
console.log(obj.name)

console.log("USING NEW.TARGET WITH CONSTRUCTOR")

function constructorFunc(){
    if(!new.target){
        throw new Error("You must call this function with the 'new' keyword")
    }

    console.log("Constructor is called with new")
}

const constructorObj = new constructorFunc()
console.log("constructorObj", constructorObj)

/**
 * Constructor is called with new
 * constructorObj constructorFunc {}
 */

const constructorObj1 = constructorFunc() // Error: You must call this function with the 'new' keyword
console.log("constructorObj1", constructorObj1)