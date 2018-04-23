//define interface and implement it into and object then function

interface AutomobileInterface {
    brand: string;
    speed: number;
    speedMethod(speed: number): void
}

const automobile: AutomobileInterface = {
    brand: "BMW",
    speed: 120,
    speedMethod() {
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