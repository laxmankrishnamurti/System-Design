let usernmae = "Laxman Krishnamurti";

// Explicitly describing the object shape
interface USER {
    name: string;
    age: number
}

const newUser: USER = {
    name: "Harshad Mehta",
    age: 22,
    // email: "harsahadmehta@gmail.com"
}

console.log("newUser is", newUser)
console.log("username is", usernmae)

interface CUSTOMER {
    customerName: string;
    panDetails: string;
    accountNumber: number;
}

class Seller {
    customerName: string;
    panDetails: string;
    accountNumber: number;

    constructor(customerName: string, panDetails: string, accountNumber: number){
        this.customerName = customerName;
        this.panDetails = panDetails;
        this.accountNumber = accountNumber
    }
}

const newSeller = new Seller("Laxman Krishnamurti", "xxxxx916E", 918252764932)
console.log("newSeller", newSeller)

// Interfaces with functions

function sayHello(name: string): void {
    console.log("Hello", name + "!")
}

sayHello("Laxman")

const getRefreshToken = (accessToken: string): string => {
    let isValid: boolean = false;

    if(accessToken === "abcd"){
        isValid = true
    }else {
        return "Invalid access token"
    }

    return "newRefreshToken is generated successfully"
}

console.log(getRefreshToken("abcd"))