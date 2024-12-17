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

// Note :- If we link an instance of a class with other instance or with other object literals then the instance does not belongs to that class, by which it had formed. Because now the instance has more properties and methods which may doesn't belongs to its parent class. 

const marks = [91,89,95,85, 87]
console.log(marks.toString())
console.log(typeof marks.toString())

const users = ["Laxman", "Sonu", "Harshad"];
const firstChain = Object.getPrototypeOf(users)
console.log("firstChain", firstChain)
const secondChain = Object.getPrototypeOf(firstChain)
console.log("secondChain", secondChain)

const firstFunction = function(){
    console.log("firstFunction called")
}

const firstChainOfFunction = Object.getPrototypeOf(firstFunction)
console.log("firstChainOfFunction", firstChainOfFunction)

const secondChainOfFunction = Object.getPrototypeOf(firstChainOfFunction)
console.log("secondChainOfFunction", secondChainOfFunction)

console.log("Parent Object Prototype", Object.prototype)
console.log("All keys of array prototype", Object.getOwnPropertyNames(Array.prototype))
console.log("Object.prototype", Object.prototype)
console.log("Array.prototype", Array.prototype)
console.log("Function.prototype", Function.prototype)
console.log("String.prototype", String.prototype)
console.log("Date.prototype", Date.prototype)
console.log("Math.prototype", Math.prototype)

const test1 = {
    type: "test1"
}

const test2 = {
    type: "test2"
}
console.log("BEFORE LINKING")
console.log("test1.prototype", Object.getPrototypeOf(test1))
console.log("test2.prototype", Object.getPrototypeOf(test2))

test1.__proto__ = test2

console.log("AFTER LINKING")
console.log("test1.prototype", Object.getPrototypeOf(test1))
console.log("test2.prototype", Object.getPrototypeOf(test2))

console.log("GET ALL PROPERTIES AND METHODS OF AN OBJECT")

console.log("Array", Object.getOwnPropertyNames(Array))
// Array [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]

console.log("Array prototype", Object.getOwnPropertyNames(Array.prototype))

/*
Array prototype [
    'length',        'constructor',    'at',
    'concat',        'copyWithin',     'fill',
    'find',          'findIndex',      'findLast',
    'findLastIndex', 'lastIndexOf',    'pop',
    'push',          'reverse',        'shift',
    'unshift',       'slice',          'sort',
    'splice',        'includes',       'indexOf',
    'join',          'keys',           'entries',
    'values',        'forEach',        'filter',
    'flat',          'flatMap',        'map',
    'every',         'some',           'reduce',
    'reduceRight',   'toLocaleString', 'toString',
    'toReversed',    'toSorted',       'toSpliced',
    'with'
  ]
*/