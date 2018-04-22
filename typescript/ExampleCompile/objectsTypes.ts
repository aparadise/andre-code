/* this object will give and error because its not defined with a type
    let vehicle = {
        brand: "BMW",
        engineType: 4.6
    }
    vehicle.brand = 5.5;
*/

//the correct way to define the object with a type is this way.

let vehicle:{brand: string, engineType: number} = {
    brand: "BMW",
    engineType: 4.6
}
vehicle.brand = '5.5';