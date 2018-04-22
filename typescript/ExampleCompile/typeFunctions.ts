    //when writing functions in typscript try to define what type can be passed in the function or it will auto get assinged 'any'
    //this function auto gets assigned the type 'any' 
    function calc1 (var1, var2) {
    let total = var1 + var2;
        return total;
    }

    calc1(1, 1);

    //there many ways to assign a type to functions

    //this function will get type of number 
    function calc2 (var1:number, var2:number):number {
    let  total: number = var1 + var2;
        return total;
    }
    calc2(1, 1);

    //this function will get type of number and I didnt over use strict with number everywhere like calc2
    function calc3 (var1: number, var2: number) {
        let  total = var1 + var2;
        return total;
    }
    calc3(1, 1);


    //this function will get type of number and string 
    function calc4 (var1:number, var2:string) {
        let  total = var1 + var2;
        return total;
    }
    calc4(1, '1');

        //this function below is called in variable for the calc3 function above
        let universal: (value1: number, value2: number)=> number;
        universal = calc3;
        console.log(universal(5,29)); 
        