//import { interfaceDeclaration } from "babel-types";

//define interface inhertance overriding by using the '?' symoble

interface AutomobileInterface {
    brand?: string;  //notice the '?' for overriding. this means its NOT strict almost like 'any'
    speed?: number;
    speedMethod?(speed: number): void
}


interface AutomobileInterface2 extends AutomobileInterface { //key word 'interface'
    brand: string; //this is strict because its has no '?'
    speed: number;
}

const automobile2: AutomobileInterface2  = {
    brand: "yo yo",
    speed: 99
}



const automobile: AutomobileInterface = {
    brand: "BMW",
    speed: 120,
    speedMethod(speed) {
        console.log( `this ${this.brand} is going at ${this.speed} miles per hour!  ` );
    }
}

class AutoMobileClass implements AutomobileInterface { //keyword is 'implements'
    brand: string;
    speed: number;
    speedMethod(speed){ //i can use the same function name because i am in a new class. (dont forget to pass arugment)
        console.log( ` hi my cars is going ${speed} ` );
    }
}

let carObj = new AutoMobileClass();
carObj.speedMethod(1000);

