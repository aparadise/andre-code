class Car {
    windows: string;
    carMsg(){
        return ` hello world  `;
    }
}


let myCar = new Car;
console.log( myCar.carMsg() );

class Car2 extends Car {
    windows: string;
    carMsg(){ //this function overrides the parent 'Car' class function. But if comment out the class in 'Car2' it automatically call the 'Car' class parent function 'carMsg' this is called 'Inhertance'.
        return ` hello world 2  `;
    }
}


let myCar2 = new Car2;
console.log( myCar2.carMsg() );

//example of inhertance

class Car3 extends Car {/* wants you extends with inhertance you dont even need to call any of the parent Car code*/}

let myCar3 = new Car3;
console.log( myCar3.carMsg() );
