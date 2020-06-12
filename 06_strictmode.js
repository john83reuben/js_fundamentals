/*
//even when variable myvar not declared, there is no error

function test(){
    myvar = 3.14;

    return myvar;

}
console.log(test());

*/

//------------------------------------------------------------------------//

/*
//By using strict mode, it will cause an error because variable myvar is not declared
"use strict";

function test(){
    myvar = 3.14;

    return myvar;

}
console.log(test());

// error

/home/jdominic/JS/js_fundamentals/js_fundamentals/06_strictmode.js:16
    myvar = 3.14;
          ^

ReferenceError: myvar is not defined
    at test (/home/jdominic/JS/js_fundamentals/js_fundamentals/06_strictmode.js:16:11)
    at Object.<anonymous> (/home/jdominic/JS/js_fundamentals/js_fundamentals/06_strictmode.js:21:13)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47

*/


//------------------------------------------------------------------------//

/*
// Usage of strict mode inside a function

function test(){
    "use strict";
    myvar = 3.14;

    return myvar;

}
myvar2 = 3.94;
console.log(myvar2);
console.log(test());

//error

jdominic@kali:~/JS/js_fundamentals/js_fundamentals$ node 06_strictmode.js 
3.94
/home/jdominic/JS/js_fundamentals/js_fundamentals/06_strictmode.js:54
    myvar = 3.14;
          ^

ReferenceError: myvar is not defined
    at test (/home/jdominic/JS/js_fundamentals/js_fundamentals/06_strictmode.js:54:11)
    at Object.<anonymous> (/home/jdominic/JS/js_fundamentals/js_fundamentals/06_strictmode.js:61:13)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47

*/


//------------------------------------------------------------------------//