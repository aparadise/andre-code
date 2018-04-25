//typeScript way of using require to import modules
//import Object = require('./externalModule'); // even though its in the same root folder you must call the file with "./yourFileName"

//we can use ES6 instead of typeScript to import modules
//import * as Object from "./externalModule";

import {name as myName, someData,} from "./externalModule"; //using alias names: name as myName and passing it.
console.log(someData('we won the draft'));//as you type typescript will see you have function or variable coming from the required file.
console.log(myName); //using and aleieas


//NOTE: I keep getting this typscript error if you dont have 'systemjs' installed--> 'Uncaught ReferenceError: exports is not defined'
//import Object2 = Object.someData; //creating alias names to the function
//console.log(Object2('santa clause'));

