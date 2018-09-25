package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        B obj = new B(); // this statement tells the look for the class name  'B' and make copy of its instance. then call its a method
        obj.show();
    }
}

//https://www.youtube.com/watch?v=WZgcRSWVgpQ
//you can not override a method with the key word final
//final is like 'const' in javascript, it can only be used once.



class A{
    public void show() {
        System.out.println("hello world");
    }
}

//java polymorphism is being used when you can override your extended borrowed method with your own.
//since this class B extends all of class A with the same method name show(). this is called method overloading.
//but java polymorphism is when you have a class with the same method name that your supposed to override
//but it doesn't write over the extended class when your code method has the exact same name as the borrowed class.
// It will call its own class method instead.

//but if i comment out this entire show() function it will call the class A function show() because class B is extended from class A


class B extends  A{
   public void show() {
        System.out.println("hello world again!"); //but if i comment out this entire show() function it will call the class A function show() because class B is extended from class A
    }
}