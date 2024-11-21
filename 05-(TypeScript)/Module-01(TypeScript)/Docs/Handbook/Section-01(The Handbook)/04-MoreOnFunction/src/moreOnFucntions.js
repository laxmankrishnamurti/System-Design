function parent1(fn) {
    fn("More on Functions");
}
function child1(str) {
    console.log(str);
}
parent1(child1);
