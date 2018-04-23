//define interface and implement it into and object
var automobile = {
    brand: "BMW",
    speed: 120,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles per hour!  ");
    }
};
