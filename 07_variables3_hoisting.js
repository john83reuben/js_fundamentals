// Variable hoisting between var and let

//name is hoisted
console.log(name);
var name = "john";

// name2 is not hoisted
console.log(name2);
let name2 = "reuben";

/*
$ node 07_variables3_hoisting.js
undefined
C:\Users\jdominic\Documents\PROJECTS\js_fundamentals\js_fundamentals\07_variables3_hoisting.js:7
console.log(name2);
            ^

ReferenceError: Cannot access 'name2' before initialization
    at Object.<anonymous> (C:\Users\jdominic\Documents\PROJECTS\js_fundamentals\js_fundamentals\07_variables3_hoisting.js:7:13)
    at Module._compile (internal/modules/cjs/loader.js:1156:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47


*/