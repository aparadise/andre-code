//namespace example 1
    namespace myNameSpaceInTypeScript {
//BASIC NAME SPACE
    function movie(){
        console.log(' black panther');
    }
}



//example 2 using 'export'
    namespace myNameSpaceInTypeScript2 {
    //COMPLETE NAME SPACE EXAMPLE
       export function displayData2(){ // in order for typescript to work you MUST tell typescrip to 'export'
           return 'hello world...using export';
       }
    }
    console.log(myNameSpaceInTypeScript2.displayData2());




    //example 3 using 'export' and calling a variable
    namespace myNameSpaceInTypeScript3 {
    
       export const name = 'andre'; //you have to 'export' your variables as well if you want get the const/let variable value.

       export function displayData3(){ // in order for typescript to work you MUST tell typescrip to 'export'
           //return 'hello world...using export';
           return name;
       }
    }

    console.log(myNameSpaceInTypeScript3.name); //notice i didnt need to use '()' to invoke since I am just calling the vaiable value
