// Variables let
/*  
let is block scoped, meanwhile var is function scoped 
*/


if(true){
    var name = "john";
    console.log("name variable inside scope: " + name);

}
console.log("name variable outside scope: " + name);


if(true){
    let name2 = "reuben";
    console.log("name2 variable inside scope: " + name2);

}
console.log("name2 variable outside scope: " + name2);


/*
output

$ node 07_variables2.js
name variable inside scope: john
name variable outside scope: john
name2 variable inside scope: reuben
C:\Users\jdominic\Documents\PROJECTS\js_fundamentals\js_fundamentals\07_variables2.js:20
console.log("name2 variable outside scope: " + name2);
                                               ^

ReferenceError: name2 is not defined
    at Object.<anonymous> (C:\Users\jdominic\Documents\PROJECTS\js_fundamentals\js_fundamentals\07_variables2.js:20:48)
    at Module._compile (internal/modules/cjs/loader.js:1156:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47


*/