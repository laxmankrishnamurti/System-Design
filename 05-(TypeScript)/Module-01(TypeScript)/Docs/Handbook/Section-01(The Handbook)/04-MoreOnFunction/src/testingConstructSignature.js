function sayHello(name){
    console.log(`Hello ${name}`)
}

const newObj = new sayHello("Laxman")
console.log(newObj)
newObj.name = "Harshad"
console.log(newObj.name)

function child3(username){
    if (username === "laxmankrishnamurti") {
      return {
        accountId: "12345",
        userEmail: "laxmankrishnamurti@gmail.com",
        ipAddress: "192.168.250.16",
      };
    }
  
    return false;
}

const newObj1 = new child3("laxmankrishnamurti")
console.log(newObj1)

