"use strict";
//typeScript way of using require to import modules
//import Object = require('./externalModule'); // even though its in the same root folder you must call the file with "./yourFileName"
exports.__esModule = true;
//we can use ES6 instead of typeScript to import modules
//import * as Object from "./externalModule";
var externalModule_1 = require("./externalModule"); //using alias names: name as myName and passing it.
console.log(externalModule_1.someData('we won the draft')); //as you type typescript will see you have function or variable coming from the required file.
console.log(externalModule_1.name); //using and aleieas
//NOTE: I keep getting this typscript error--> 'Uncaught ReferenceError: exports is not defined'
//import Object2 = Object.someData; //creating alias names to the function
//console.log(Object2('santa clause'));
