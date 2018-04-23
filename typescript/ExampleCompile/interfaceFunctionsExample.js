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
