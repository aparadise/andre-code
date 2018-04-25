"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract class
var Shoe = /** @class */ (function () {
    function Shoe() {
    }
    Shoe.prototype.showName = function () {
        console.log("NIKE");
    };
    return Shoe;
}());
var Kids = /** @class */ (function (_super) {
    __extends(Kids, _super);
    function Kids() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kids;
}(Shoe));
var shoeTypes = new Kids;
shoeTypes.showName();
var Example2 = /** @class */ (function () {
    function Example2() {
    }
    return Example2;
}());
//es6 class in typscript
var Tree = /** @class */ (function () {
    /*branch: string;*/ //set the type to string or set it a public instead of predifining it.
    function Tree(branch) {
        this.branch = branch;
        this.branch = branch;
    }
    Tree.prototype.moveLeaf = function () {
        return " " + this.branch + " is green ";
        //console.log( ` ${this.branch} is green ` );
    };
    return Tree;
}());
var tree1 = new Tree('this 90 year old tree...');
//tree1.moveLeaf();
console.log(tree1.moveLeaf());
console.log(tree1.branch); //if this was trying to call a 'private' instead of 'public' this would fail to get access the property or method in the class unless it was child class being extened then it would have full access.
//generic types allows the user to pick what type goes in the line of code. example a function or class.
function displayData(somedata) {
    var someOtherData = TYPE;
    return somedata;
}
console.log(displayData(29)); //i can still pass this a number even though i defined it as 'string' because I used <TYPE> to override the issu.
//example 1 generic class
var ObjectGenericClasses = /** @class */ (function () {
    function ObjectGenericClasses(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    return ObjectGenericClasses;
}());
var obj1 = new ObjectGenericClasses('andre', 29);
var obj2 = new ObjectGenericClasses(true, 29);
//example 2 with Arrays
var array1 = number[] = [29, 32, 42, 30];
var array2 = Array < STRING > , _a = void 0;
'one', '2', 'three';
;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.carMsg = function () {
        return " hello world  ";
    };
    return Car;
}());
var myCar = new Car;
console.log(myCar.carMsg());
var Car2 = /** @class */ (function (_super) {
    __extends(Car2, _super);
    function Car2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car2.prototype.carMsg = function () {
        return " hello world 2  ";
    };
    return Car2;
}(Car));
var myCar2 = new Car2;
console.log(myCar2.carMsg());
//example of inhertance
var Car3 = /** @class */ (function (_super) {
    __extends(Car3, _super);
    function Car3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car3;
}(Car));
var myCar3 = new Car3;
console.log(myCar3.carMsg());
//define interface and implement it into and object then function
var automobile = {
    brand: "BMW",
    speed: 120,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles per hour!  ");
    }
};
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log(" hi my cars is going " + speed + " ");
    };
    return AutoMobileClass;
}());
var carObj = new AutoMobileClass();
carObj.speedMethod(1000);
//define interface and implement it into and object
var automobile = {
    brand: "BMW",
    speed: 120,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles per hour!  ");
    }
};
//define interface and implement it into and object then function
var automobile = {
    brand: "BMW",
    speed: 120,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles per hour!  ");
    }
};
function car1(automobile) {
    automobile.speed = 503;
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles per hour!  ");
}
function car2(automobile) {
    automobile.speed = "andre"; //no errors here because of type 'any'
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles per hour!  ");
}
car1(automobile);
car2(automobile);
//import { interfaceDeclaration } from "babel-types";
var automobile2 = {
    brand: "yo yo",
    speed: 99
};
var automobile = {
    brand: "BMW",
    speed: 120,
    speedMethod: function (speed) {
        console.log("this " + this.brand + " is going at " + this.speed + " miles per hour!  ");
    }
};
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log(" hi my cars is going " + speed + " ");
    };
    return AutoMobileClass;
}());
var carObj = new AutoMobileClass();
carObj.speedMethod(1000);
//namespace example 1
var myNameSpaceInTypeScript;
//namespace example 1
(function (myNameSpaceInTypeScript) {
    //BASIC NAME SPACE
    function movie() {
        console.log(' black panther');
    }
})(myNameSpaceInTypeScript || (myNameSpaceInTypeScript = {}));
//example 2 using 'export'
var myNameSpaceInTypeScript2;
//example 2 using 'export'
(function (myNameSpaceInTypeScript2) {
    //COMPLETE NAME SPACE EXAMPLE
    function displayData2() {
        return 'hello world...using export';
    }
    myNameSpaceInTypeScript2.displayData2 = displayData2;
})(myNameSpaceInTypeScript2 || (myNameSpaceInTypeScript2 = {}));
console.log(myNameSpaceInTypeScript2.displayData2());
//example 3 using 'export' and calling a variable
var myNameSpaceInTypeScript3;
//example 3 using 'export' and calling a variable
(function (myNameSpaceInTypeScript3) {
    myNameSpaceInTypeScript3.name = 'andre'; //you have to 'export' your variables as well if you want get the const/let variable value.
    function displayData3() {
        //return 'hello world...using export';
        return myNameSpaceInTypeScript3.name;
    }
    myNameSpaceInTypeScript3.displayData3 = displayData3;
})(myNameSpaceInTypeScript3 || (myNameSpaceInTypeScript3 = {}));
console.log(myNameSpaceInTypeScript3.name); //notice i didnt need to use '()' to invoke since I am just calling the vaiable value
/* this object will give and error because its not defined with a type
    let vehicle = {
        brand: "BMW",
        engineType: 4.6
    }
    vehicle.brand = 5.5;
*/
//the correct way to define the object with a type is this way.
var vehicle = {
    brand: "BMW",
    engineType: 4.6
};
vehicle.brand = '5.5';
//when writing functions in typscript try to define what type can be passed in the function or it will auto get assinged 'any'
//this function auto gets assigned the type 'any' 
function calc1(var1, var2) {
    var total = var1 + var2;
    return total;
}
calc1(1, 1);
//there many ways to assign a type to functions
//this function will get type of number 
function calc2(var1, var2) {
    var total = var1 + var2;
    return total;
}
calc2(1, 1);
//this function will get type of number and I didnt over use strict with number everywhere like calc2
function calc3(var1, var2) {
    var total = var1 + var2;
    return total;
}
calc3(1, 1);
//this function will get type of number and string 
function calc4(var1, var2) {
    var total = var1 + var2;
    return total;
}
calc4(1, '1');
//this function below is called in a variable for the calc3 function above
var universal;
universal = calc3;
console.log(universal(5, 29));
var car = {
    brand: 'BMW',
    engine: 3.4,
    run: function () {
        console.log(" i am driging 100ph");
    }
};
car.brand = '5.5'; //i detete the quotes i will get typscript error asking for a string
//untion types allow you to defined more than type in variable
//example
var unionType; // you seperate your types with a single pipe '|'
unionType = "string.... hello world";
unionType = 29;
//unionType = false; //this line throws and error because its not define as a type
//we dont need a namespace for this
System.register("externalModules/externalModule", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function someData(value1) {
        //return 'hello world...using export';
        return value1;
    }
    exports_1("someData", someData);
    var name;
    return {
        setters: [],
        execute: function () {
            exports_1("name", name = 'andre j is imported from a module'); //you have to 'export' your variables as well if you want get the const/let variable value.
        }
    };
});
//typeScript way of using require to import modules
//import Object = require('./externalModule'); // even though its in the same root folder you must call the file with "./yourFileName"
System.register("externalModules/appRunner", ["externalModules/externalModule"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var externalModule_1;
    return {
        setters: [
            function (externalModule_1_1) {
                externalModule_1 = externalModule_1_1;
            }
        ],
        execute: function () {
            console.log(externalModule_1.someData('we won the draft')); //as you type typescript will see you have function or variable coming from the required file.
        }
    };
});
var nameSpaceTest;
(function (nameSpaceTest) {
    nameSpaceTest.name = 'andre j is imported from a module'; //you have to 'export' your variables as well if you want get the const/let variable value.
    function someData() {
        //return 'hello world...using export';
        return nameSpaceTest.name;
    }
    nameSpaceTest.someData = someData;
    function someData2(value1) {
        //return 'hello world...using export';
        return value1;
    }
    nameSpaceTest.someData2 = someData2;
})(nameSpaceTest || (nameSpaceTest = {}));
/*using import a namespace module you must type the following lne below with the 3 forward slashes to the path of the modlue
this should complile and automatcially create .js version of the typescript module.

you may have to  complie it manually if type script doesnt automatically create a .js file of the module:  tsc nameOfFile --outFile nameOfFile.js

for example this file i typed: tsc nameSpaceTest.ts --outFile nameSpaceTest.js

*/
///<reference path="nameSpaceModule.ts"  />
console.log(nameSpaceTest.name); //notice i didnt need to use '()' to invoke since I am just calling the vaiable value
//i can use 'import' as well for the following name space using 'thisSpace'
var thisSpace = nameSpaceTest.someData;
console.log(thisSpace());
console.log(thisSpace);
//notice i cam calling a diffent fucction name from the same nameSpaceTest class module
var thisSpace2 = nameSpaceTest.someData2;
console.log(thisSpace2('go cowboys'));
console.log(thisSpace2);
