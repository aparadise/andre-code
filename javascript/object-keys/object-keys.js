//sports object
var sports = {
    football: "runningback",
    basketball: "pointGuard",
    soccer: "forward",
    baseball: "pitcher"
};

//printing keys
console.log(Object.keys(sports));

document.getElementById("keys").innerHTML = Object.keys(sports);

//prints out just one at time
console.log(Object.keys(sports)[0]);