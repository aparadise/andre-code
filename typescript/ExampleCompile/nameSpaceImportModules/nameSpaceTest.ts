    /*using import a namespace module you must type the following lne below with the 3 forward slashes to the path of the modlue
    this should complile and automatcially create .js version of the typescript module.

    you may have to  complie it manually if type script doesnt automatically create a .js file of the module:  tsc nameOfFile --outFile nameOfFile.js

    for example this file i typed: tsc nameSpaceTest.ts --outFile nameSpaceTest.js

    */
    
///<reference path="nameSpaceModule.ts"  />

   console.log(nameSpaceTest.name); //notice i didnt need to use '()' to invoke since I am just calling the vaiable value
   
   //i can use 'import' as well for the following name space using 'thisSpace'

   import thisSpace = nameSpaceTest.someData;
    console.log(thisSpace());
    console.log(thisSpace);

    
    //notice i cam calling a diffent fucction name from the same nameSpaceTest class module
   import thisSpace2 = nameSpaceTest.someData2;
   console.log(thisSpace2('go cowboys'));
   console.log(thisSpace2);
