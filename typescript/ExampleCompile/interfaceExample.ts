//define interface and implement it into and object

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
