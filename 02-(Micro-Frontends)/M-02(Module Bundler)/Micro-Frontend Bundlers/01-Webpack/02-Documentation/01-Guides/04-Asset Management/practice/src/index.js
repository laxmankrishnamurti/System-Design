import _ from "lodash"
import "./style.css"
import heroIcon from './hero-image.png'

function component(){
    const element = document.createElement("div")

    element.innerHTML = _.join(["Hello", "webpack"], ' ');

    //loading css
    element.classList.add('hello')

    //adding an image to our existing div
    const heroImage = new Image()
    heroImage.src = heroIcon;
    element.append(heroImage)

    return element;
}
document.body.appendChild(component())