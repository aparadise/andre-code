package com.company;

//https://www.youtube.com/watch?v=0xfOWoRWjrQ
//this Food calls talks to Main.java. (i should named the Main.java something else thats starts with food)

public class Food {

    private String foodA;

    public Food(String A){
        foodA = A + " and a free drink.";
    }

    public String getFood(){
        return  foodA; //use a value when you a value is return. DO NOT use a return with void key word
    }

    void systemPrint(){
        System.out.println(foodA); //void out if nothing is returned
    }

}
