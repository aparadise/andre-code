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

function car1(automobile: AutomobileInterface) { //since i gave the type as AutomobileInterface its strict
    automobile.speed = 503;
    console.log( `this ${automobile.brand} is going at ${automobile.speed} miles per hour!  ` );
    
}

function car2(automobile) { //since i gaave it NO type it automatically made the type: 'any's
    automobile.speed = "andre"; //no errors here because of type 'any'
    console.log( `this ${automobile.brand} is going at ${automobile.speed} miles per hour!  ` );
    
}

car1(automobile);
car2(automobile);