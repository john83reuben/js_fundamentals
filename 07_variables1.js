// Variables var

// local variable using var

function local(){
    var mylocal = 500;

    console.log("Calling local variable called mylocal inside function: " + mylocal);

}

// global variable defined locally - not recommended 

function global(){
    myglobal = 100;

    console.log("Calling local variable called myglobal inside function: " + myglobal);

}
global();
console.log("Calling local variable called myglobal outside function: " + myglobal);
local();
console.log("Calling local variable called mylocal outside function: " + mylocal);


/* output


$ node 07_variables.js
Calling local variable called myglobal inside function: 100
Calling local variable called myglobal outside function: 100
Calling local variable called mylocal inside function: 500
C:\Users\jdominic\Documents\PROJECTS\js_fundamentals\js_fundamentals\07_variables.js:23
console.log("Calling local variable called mylocal outside function: " + mylocal);
                                                                         ^

ReferenceError: mylocal is not defined
    at Object.<anonymous> (C:\Users\jdominic\Documents\PROJECTS\js_fundamentals\js_fundamentals\07_variables.js:23:74)
    at Module._compile (internal/modules/cjs/loader.js:1156:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47

*/