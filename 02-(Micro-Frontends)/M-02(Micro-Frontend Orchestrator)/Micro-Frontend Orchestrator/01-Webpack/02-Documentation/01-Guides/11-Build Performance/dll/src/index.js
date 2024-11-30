const _ = require("lodash")

function getComponent(){
    const element = document.createElement("div")
    element.innerHTML = _.join(["hello", "webpack"], " ")

    return element
}

document.body.appendChild(getComponent())