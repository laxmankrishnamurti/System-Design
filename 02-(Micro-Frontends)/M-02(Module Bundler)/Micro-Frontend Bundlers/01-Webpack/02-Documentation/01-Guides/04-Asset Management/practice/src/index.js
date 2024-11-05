import _ from "lodash"
import "./style.css"
import heroIcon from './hero-image.png'
import csvData from "./data.csv"
import xmlData from "./data.xml"
import toml from "./data.toml"
import yaml from "./data.yaml"
// import json5 from ".data.json5"

console.log("toml title", toml.title)
console.log("yaml title", yaml.title)
// console.log("json5 title", json5)

function component(){
    const element = document.createElement("div")

    element.innerHTML = _.join(["Hello", "webpack"], ' ');

    //loading css
    element.classList.add('hello')

    //adding an image to our existing div
    const heroImage = new Image()
    heroImage.src = heroIcon;
    element.append(heroImage)

    console.log("csvData", csvData)
    console.log("xmlData", xmlData)

    return element;
}
document.body.appendChild(component())