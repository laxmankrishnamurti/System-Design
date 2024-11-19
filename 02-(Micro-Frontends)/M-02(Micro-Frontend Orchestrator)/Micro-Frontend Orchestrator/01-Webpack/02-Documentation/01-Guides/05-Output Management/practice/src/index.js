import _ from 'lodash'
import printMe from "./printFun"

function component(){
    const element = document.createElement("div");
    const button  = document.createElement("button");

    element.innerHTML = _.join(["Hello webpack"], ' ');

    button.innerHTML = 'Click me and check the console!';
    button.onclick = printMe;

    element.appendChild(button);
    return element;
}
document.body.appendChild(component())