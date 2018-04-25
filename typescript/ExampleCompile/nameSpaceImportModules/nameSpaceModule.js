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
