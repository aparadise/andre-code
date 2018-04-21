//typescript
//to complile the '.ts' file on the command line type: tsc FileName
//declaring  if your calling a string or number, array[], boolen, any, etc its called 'static'
//example let name: string //this is called "TYPES"

/*

1. let isDone: boolean = false;
2. let decimal: number = 29;
3. let name: string = 'andre';
4. let post: number[] = [1,2,3];
5. let notSure: any = 'hi :)';

*/

//learn more: https://www.typescriptlang.org/


class Greeter {
  greeting: string;
	constructor (message: string) {
      this.greeting = message;
    }
	greet() {
   //return ` { hello + this.message} `;
  return 'hello,' + this.message;
    }
}

let greeter = new Greeter('world');

let button = document.createElement('button');
button.textContent= 'Say Hello';

button.onClick = function(){
	alert(greeter.greet());
  console.log(greeter.greet());
}

document.body.appendChild(button);
