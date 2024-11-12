console.log("PRIMARY EXPRESSIONS")

const person = {
    name: "Laxman Krishnamurti",
    age: 21,
    getUserAge: function(){
        return this.age
    }
}
console.log(person.getUserAge())

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

console.log("LEFT-HAND-SIDE-EXPRESSION")

console.log(person?.email)

class Animal{
    constructor(){
        if(new.target === Animal){
            throw new Error("new.target value")
        }
    }
}

const animal1 = new Animal()
console.log("animal", animal1)