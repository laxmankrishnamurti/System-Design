import _ from "lodash"
import numref from "./ref.json"

export function numToWord(num){
    return _.reduce(
        numref,
        (accum, ref) => {
            return ref.num === num ? ref.word : accum
        },
        ''
    );
}

export function wordToNum(word) {
    return _.reduce(
        numref, 
        (accum, ref) => {
            return ref.word === word && word.toLowerCase() ? ref.num : accum;
        },
        -1
    );
}