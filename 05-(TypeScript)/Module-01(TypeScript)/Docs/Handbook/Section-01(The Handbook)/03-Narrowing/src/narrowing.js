function isEligibleForVoting(age) {
    if (typeof age === "number") {
        if (age >= 18) {
            console.log("Yes, Your are eligible for voting. You can vote. ");
        }
        else {
            console.log("Oops! since you are a teenager so you can't vote.");
        }
    }
    else {
        console.log("Voter age is", age);
    }
}
isEligibleForVoting("18");
function printAllUses(users) {
    if (typeof users === "object") {
        users === null || users === void 0 ? void 0 : users.forEach(function (user) {
            console.log("user", user);
        });
    }
    else if (typeof users === "string") {
        console.log("users", users);
    }
    else {
        return false;
    }
}
console.log(printAllUses(null));
