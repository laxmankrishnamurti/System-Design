const shape = "shape"
function person({shape, x = 0, y = 0}){
    console.log("shape", shape)
    console.log("x", x)
    console.log("y", y)
}
person({
    shape
})