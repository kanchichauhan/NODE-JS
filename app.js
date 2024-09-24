// all the code of the module is wrapped inside a function(IIFE - immediately invoked function expresion) when we call require

const {calcMultiply, sum} = require('./calculate')
// import {name , sum} from './commonJSmodules.js'
/* by default, modules are protected, the dont share the private
functions and variables to other module & doesn't leak the data,
we have todo that explicitly */
console.log(1+1);
console.log('kanchi will get 50 Lakhs package soon');

sum(1, 3);
calcMultiply(2,3)

/* This pattern is known as COMMON JS MODULES / CJS
    - module.exports
        require(someFn)
*/

// There are ES MODULES / MJS as well