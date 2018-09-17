package com.company;

        import java.util.Scanner;

public class Fighting{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Attack Fighting Points!");
        int attackPoints = sc.nextInt();
        System.out.println("Nigga Yo Azz is getting cracked!");
        int blockPoints = sc.nextInt();
        System.out.println("Protect yo self!!!");

        if( attackPoints >= 100 ){
            System.out.println("Dude your being attack by 100pts are more. You losing bro! ");
        }else{
            System.out.println("Way to keep yo head down to stay UNDER 99pts playa from being attacked. Good blocked points:" + blockPoints);
        }

    }
}
