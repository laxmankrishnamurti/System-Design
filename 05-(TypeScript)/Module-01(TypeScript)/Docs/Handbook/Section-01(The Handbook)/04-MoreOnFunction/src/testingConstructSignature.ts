interface User {
    accountId: string;
    userEmail: string;
    ipAddress: string;
}

type ConstructSignature = {
    new (username: string) : User
}

function highOrderFunction(fn: ConstructSignature){
    const user = new fn("")
    console.log(user)
}

class UserClass {
    accountId;
    userEmail;
    ipAddress;
    constructor(username: string){
        if(username === "laxmankrishnamurti"){
            this.accountId = "12345";
            this.userEmail = "laxmankrishnamurti@gmail.com";
            this.ipAddress = "192.168.250.16"
        }else {
            false
        }
    }
}

// function compatibleFunction(username: string){
//     if(!new.target){
//         if(username === "laxmankrishnamurti"){
//             return {
//                 accountId:  "12345",
//                 userEmail:  "laxmankrishnamurti@gmail.com",
//                 ipAddress:  "192.168.250.16"
//             }
//         }
//     }
//     return false
// }

highOrderFunction(UserClass)