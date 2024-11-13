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