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
