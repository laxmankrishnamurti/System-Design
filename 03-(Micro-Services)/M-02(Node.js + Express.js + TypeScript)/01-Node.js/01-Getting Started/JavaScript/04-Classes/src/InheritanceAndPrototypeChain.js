const proto1 = {
    email: "laxmankrishnamurti@gmail.com"
}

const user1 = {
    name: "Laxman Krishnamurti",
    age: 22,
    __proto__: proto1
}

console.log(user1.__proto__)