
//example 1 generic class

class ObjectGenericClasses<TYPE1, TYPE2 extends string>{ //when adding 'extends' this is called 'constraining' the arrguments
    constructor(public value1:TYPE1, public value2: TYPE2){
    }
}


let obj1 = new ObjectGenericClasses<string, number>('andre', 29);

let obj2 = new ObjectGenericClasses<boolean, number>(true, 29);


//example 2 with Arrays
let array1 = number[] =[29, 32,42, 30];
let array2 = Array<STRING> = ['one', '2', 'three'];
