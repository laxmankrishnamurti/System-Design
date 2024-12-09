/**
 * Inheriting Properties
 */

const proto1 = {
    email: "laxmankrishnamurti@gmail.com"
}

const user1 = {
    name: "Laxman Krishnamurti",
    age: 22,
    __proto__: proto1
}

console.log(user1.__proto__)

const user2 = {
    name: "Harshad Mehta",
    age: 20,
    __proto__: {
        email: "harshadmehta@gmail.com",
        __proto__: {
            phone: 9508981101,
            __proto__: {
                city: "Patna",
                Street: "9A",
                House: "Dharamsheela niwas",
                State: "Bihar",
                __proto__: {
                    pin: 800020
                }
            }
        }
    }
}

console.log(user2.name)
console.log(user2.email)
console.log(user2.State)
console.log(user2.pin)

console.log(Object.getPrototypeOf(user2.__proto__.__proto__.__proto__))

// Get all prototypes

function getAllPrototypes(obj){
    const prototypes = []
    let currentPrototype = Object.getPrototypeOf(obj)

    while(currentPrototype){
        prototypes.push(currentPrototype)
        currentPrototype = Object.getPrototypeOf(currentPrototype)
    }

    return prototypes
}

const allPrototypes = getAllPrototypes(user2)
console.log("All Prototypes", allPrototypes)

/*

All Prototypes 

[
    { email: 'harshadmehta@gmail.com' },
    { phone: 9508981101 },
    {
      city: 'Patna',
      Street: '9A',
      House: 'Dharamsheela niwas',
      State: 'Bihar'
    },
    { pin: 800020 },
    [Object: null prototype] {}
]

[Object: null prototype]{} ===> This signifies the end of the prototype chain.

*/  

/**
 * Inhering methods :: When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.
 */

const parent = {
    bonusPoint: 10,
    addBonusPoint(){
        console.log("Bonus Point", this.bonusPoint + 5)
    }
}

const child = {
    bonusPoint: 1,
    __proto__: parent
}

child.addBonusPoint() // Bonus Point 6

const Box1 = [
    {value: 1, getValue() { return this.value }},
    {value: 2, getValue() { return this.value }},
    {value: 3, getValue() { return this.value }},
]

const boxPrototype = {
    getValue(){
        return this.value
    }
}

const Box2 = [
    {value: 1, __proto__: boxPrototype},
    {value: 2, __proto__: boxPrototype},
    {value: 3, __proto__: boxPrototype},
]

function Box3(value){
    return this.value
}

Box3.prototype.getValue = function(){
    return this.value
}

const Box4 = [new Box3(1), new Box3(2), new Box3(3)]
console.log("Box4", Box4)
console.log("Box3", Box4[0].getValue())