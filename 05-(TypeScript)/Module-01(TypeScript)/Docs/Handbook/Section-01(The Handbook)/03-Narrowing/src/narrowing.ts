function isEligibleForVoting(age: string | number){
    if(typeof age === "number"){
        if(age >= 18){
            console.log("Yes, Your are eligible for voting. You can vote. ")
        }else {
            console.log("Oops! since you are a teenager so you can't vote.")
        }
    }else {
        console.log("Voter age is", age)
    }
}

isEligibleForVoting("18")

function printAllUses(users: | string | string[] | null){
    if(typeof users === "object"){
        users?.forEach((user) => {
            console.log("user", user)
        })
    }else if(typeof users === "string"){
        console.log("users", users)
    }else {
        return false;
    }
}

console.log(printAllUses(null))

