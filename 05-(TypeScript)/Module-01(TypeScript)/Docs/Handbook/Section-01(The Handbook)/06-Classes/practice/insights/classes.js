class User{
    name;
    age;
    email;

    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    eligibleForVote(){
        return this.age >= 18 ? true : false
    }
}

const user1 = new User("Laxman Krishnamurti", 22, "laxmankrishnamurti@gmail.com")
console.log(user1.name)
console.log(user1.email)
user1.greet()
console.log(user1.eligibleForVote())

user1.greet = function(){
    console.log(`Hii ${this.name}! How are you?`)
}

user1.greet()

const literalUser = {
    isLoggedIn: false,
    login: function(){
        this.isLoggedIn = true
    },
    logout: function(){
        this.isLoggedIn = false
    },
    userStatus: function(){
        if(this.isLoggedIn){
            console.log("Logged in")
        }else {
            console.log("Logged out")
        }
    }
}

// user1.__proto__ = literalUser

// user1.userStatus()
// user1.login()
// user1.userStatus()
// user1.logout()
// user1.userStatus()

console.log("user1 and literalUser are linked?", Object.getPrototypeOf(user1))
console.log("user1 prototype is the prototype of literaluser?", Object.getPrototypeOf(user1) === literalUser.prototype)
console.log("user1 is the prototype of the User class?", Object.getPrototypeOf(user1) === User.prototype)
console.log("user1 is an instance of the User class?", user1 instanceof User)

/**
 * Outputs
 * false
 * true
 * true
 */

// Note :- If we link an instance of a class with other instance or with other object literals then the instance does not belongs to that class, by which it had formed. 