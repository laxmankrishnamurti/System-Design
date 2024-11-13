const marks: number[] = [85,75,91,92,89,95]
console.log("marks", marks)

const points: Array<number> = [0.5,0.2,0.3,0.8,0.9,1]
console.log("points", points)

function sayHello(name, date){
    console.log(`Hello ${name}, today is ${date}`)
}
sayHello("Laxman Krishnamurti", new Date())

function getIpAddress(): string {
    return "192.168.16.254"
}

const userIpAddress: string = getIpAddress()

// Anonymous function

const mixArr = ["laxman", 22, true]
mixArr.forEach((value) => {
    console.log("value is", value)
    // console.log(typeof value.toFixed(2))
})

const newMix = [22,32]
newMix.forEach(function (value){
    console.log("value is", value)
    console.log("typeof value is", typeof value)
    console.log("fixed value", value.toFixed(2))
})  


function logUser(obj: {name: string; email?: string}){
    console.log("LOGUSER CALLED")
    console.log("you registered email id is", obj.email?.toUpperCase());
    // console.log("you registered email id is", obj.email.toUpperCase());
}

logUser({name: "Laxman Krishnamurti"})

function showDetails(obj: {name: string; email?: string}){
    if(obj.email !== undefined){
        console.log("your registered email id is", obj.email)
    }
}