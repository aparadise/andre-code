//generic types allows the user to pick what type goes in the line of code. example a function or class.

function displayData<TYPE>(somedata:string){ // by using <TYPE> i can use ANYTHING in the argument: string or number.  
    let someOtherData = TYPE;
    return somedata;
}
console.log(displayData(29)); //i can still pass this a number even though i defined it as 'string' because I used <TYPE> to override the issu.
