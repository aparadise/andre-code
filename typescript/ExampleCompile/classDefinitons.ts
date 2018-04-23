//es6 class in typscript

class Tree {
    /*branch: string;*/  //set the type to string or set it a public instead of predifining it.

    constructor(public branch:string) {  //public, protected, and private are  called 'access modifier'
        this.branch = branch;
    }
    
    public moveLeaf(){//using access modifer.
      return ` ${this.branch} is green `;
      //console.log( ` ${this.branch} is green ` );
    }
}

let tree1 = new Tree('this 90 year old tree...');

//tree1.moveLeaf();
console.log(tree1.moveLeaf());

console.log(tree1.branch); //if this was trying to call a 'private' instead of 'public' this would fail to get access the property or method in the class unless it was child class being extened then it would have full access.
