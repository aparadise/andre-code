//es6 class in typscript

class Tree {
    /*branch: string;*/  //set the type to string or set it a public instead of predifining it.

    constructor(public branch:string) {  //public, protected, and private are  called 'access modifier'
        this.branch = branch;
    }
}