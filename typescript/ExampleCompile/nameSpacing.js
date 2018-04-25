//namespace example 1
var myNameSpaceInTypeScript;
(function (myNameSpaceInTypeScript) {
    //BASIC NAME SPACE
    function movie() {
        console.log(' black panther');
    }
})(myNameSpaceInTypeScript || (myNameSpaceInTypeScript = {}));
//example 2 using 'export'
var myNameSpaceInTypeScript2;
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
(function (myNameSpaceInTypeScript3) {
    myNameSpaceInTypeScript3.name = 'andre'; //you have to 'export' your variables as well if you want get the const/let variable value.
    function displayData3() {
        //return 'hello world...using export';
        return myNameSpaceInTypeScript3.name;
    }
    myNameSpaceInTypeScript3.displayData3 = displayData3;
})(myNameSpaceInTypeScript3 || (myNameSpaceInTypeScript3 = {}));
console.log(myNameSpaceInTypeScript3.name); //notice i didnt need to use '()' to invoke since I am just calling the vaiable value
