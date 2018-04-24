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
