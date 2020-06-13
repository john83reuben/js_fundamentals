/*
// GLOBAL Declaration

// So declaring var as global variable is not good because window object is central, and if
// we use a third party library which has a same name as our variable, than our variable will be overwritten 
// by the 3rd party library

var name = 'john';
console.log(window.name);


let name2 = 'reuben';
console.log(window.name2);
console.log(name2);

*/

//----------------------------------------------------------------------------------------------------------------//

// Conditional declaration

/*
if(true){
    var name = "john";
    console.log("Inside Block" + name);
}
console.log("Outside Block" + name);

*/

//----------------------------------------------------------------------------------------------------------------//

/*

// let and var in for loop


function start(){
    for(var i = 0; i < 5 ; i++){
        console.log(i);

    }
    console.log(i); --> if var is used, this will print out. If let is used, then this statement will give error
}
start();

*/


//----------------------------------------------------------------------------------------------------------------//


// Const - identically to let , but has to be initiliaze, and value cannot be changed

const age = 37;
age = 28;

console.log(age); //TypeError: Assignment to constant variable.

