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
