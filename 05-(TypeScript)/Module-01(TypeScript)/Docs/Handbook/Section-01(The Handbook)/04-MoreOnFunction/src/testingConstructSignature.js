function highOrderFunction(fn) {
    var user = new fn("");
    console.log(user);
}
var UserClass = /** @class */ (function () {
    function UserClass(username) {
        if (username === "laxmankrishnamurti") {
            this.accountId = "12345";
            this.userEmail = "laxmankrishnamurti@gmail.com";
            this.ipAddress = "192.168.250.16";
        }
        else {
            false;
        }
    }
    return UserClass;
}());
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
highOrderFunction(UserClass);
