//abstract class

abstract class Shoe {
    showName(){
        console.log(`NIKE`);
    }
}

class Kids extends Shoe{}

let shoeTypes = new Kids;
shoeTypes.showName();
