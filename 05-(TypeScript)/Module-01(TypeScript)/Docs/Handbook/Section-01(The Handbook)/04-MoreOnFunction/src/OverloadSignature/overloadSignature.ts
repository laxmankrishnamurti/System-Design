function highOrderFunction<T>(arr: T[], callback: (ele: T) =>  number): number[] 


function highOrderFunction<T>(arr: T[], callback: (ele: T) => number): number[] {
    const newArr: number[] = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]))
    }

    console.log("newArr", newArr)
    return newArr
}

function callback(ele: any): number{
    return +ele
}

highOrderFunction(["1", "2", "3", "4", "5"], callback)

function fn(x: boolean, y: string): void;
function fn(x: string, y: boolean): void;
function fn(x: string | boolean, y: string | boolean){

}


// 1st part (Function overload signature)
function fn1(x: string): number;
function fn1(x: any[]): number;


// 2nd part (Function implimentation signature)
function fn1(x: any){
    return x.length;
}

fn1("")
fn1([0])

const condition = true
// fn1(condition ? "true": ["false"])

console.log("THIS IN A FUNCTION")

interface Mismatch {
    name: string
}

interface User {
    name: string;
    admin: boolean
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[]
}

const miss: Mismatch[] = [
    {name: "Laxman Krishnamurti"},
    {name: "Pallavi jain"},
    {name: "Kawya Krishnamurti"},
    {name: "Fruti Kumari"},
    {name: "Vikram Dhanush"},
    {name: "Jitendra Yadav"},
]

const users: User[] = [
    {
        name: "Laxman Krishnamurti",
        admin: true
    },
    {
        name: "Kawya Krishnamurti",
        admin: false
    },
    {
        name: "Pallavi Jain",
        admin: false
    },
    {
        name: "Jitendra Yadav",
        admin: true
    },
    {
        name: "Anjali Kumari",
        admin: true
    },
]

const db: DB = {
    filterUsers(filter){
        return users.filter((user) => filter.call(user))
    }
}

const admins = db.filterUsers(function (this: User) {
    return this.admin
})

console.log("Admins", admins)

interface Person {
    name: string;
    age: number;
    email: string;
    getUsername(name: string): string;
}

const person: Person = {
    name: "Laxman Krishnamurti",
    age: 22,
    email: "laxmankrishnamurti@gmail.com",
    getUsername: function(name){
        if(name === "Laxman Krishnamurti"){
            return "laxmankrishnamurti"
        }else {
            return "Oops! user doesn't exist"
        }
    }
}

console.log("username", person.getUsername("Laxman Krishnamurti"))
console.log("username", person.getUsername("Harshad Mehta"))


const marks = [91,95, 85, 75, 89]
marks.sort((a,b) => {
    return a - b
})
console.log("marks", marks)