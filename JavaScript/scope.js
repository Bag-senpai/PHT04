// variable scope
// global scope
let globalVar = "I am global";
console.log(globalVar);

// local scope
function localscope() {
    console.log(globalVar);
    let localVar = "I am local";
    console.log(localVar);
}

localscope();
// console.log(localVar); - throws an error since localVar is a local variable