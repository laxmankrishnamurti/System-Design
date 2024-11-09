var usernmae = "Laxman Krishnamurti";
var newUser = {
    name: "Harshad Mehta",
    age: 22,
    // email: "harsahadmehta@gmail.com"
};
console.log("newUser is", newUser);
console.log("username is", usernmae);
var Seller = /** @class */ (function () {
    function Seller(customerName, panDetails, accountNumber) {
        this.customerName = customerName;
        this.panDetails = panDetails;
        this.accountNumber = accountNumber;
    }
    return Seller;
}());
var newSeller = new Seller("Laxman Krishnamurti", "xxxxx916E", 918252764932);
console.log("newSeller", newSeller);
// Interfaces with functions
function sayHello(name) {
    console.log("Hello", name + "!");
}
sayHello("Laxman");
var getRefreshToken = function (accessToken) {
    var isValid = false;
    if (accessToken === "abcd") {
        isValid = true;
    }
    else {
        return "Invalid access token";
    }
    return "newRefreshToken is generated successfully";
};
console.log(getRefreshToken("abcd"));
