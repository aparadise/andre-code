namespace nameSpaceTest {
    
    export const name = 'andre j is imported from a module'; //you have to 'export' your variables as well if you want get the const/let variable value.

    export function someData(){ // in order for typescript to work you MUST tell typescrip to 'export'
        //return 'hello world...using export';
        return name;
    }
 }
