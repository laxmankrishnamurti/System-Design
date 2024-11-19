import _ from "lodash"

function component(){
    const element = document.createElement('div')

    // Lodash, currently included via a script, is required for this line to work
    //Now, lodash is loaded by the import statement
    element.innerHTML = _.join(["Hello from", "Webpack"], ' ')

    return element
}

document.body.appendChild(component())