package com.company;

import java.util.*;

//https://www.youtube.com/watch?v=BRcY2vIr-EQ&index=6&list=PL27BCE863B6A864E3
public class Main {

    public static void main(String[] args) {
	// write your code here
        String[] things = {"apple", "oranges", "beans", "BREAD","soup"};
        List<String> list1 = new LinkedList<String>(); // this casting line takes a copy of the values in the 'things' so that it can be passed around

        for(String x: things){ //copy everything in 'things' hold its value in 'x' and add it to 'list1'
            list1.add(x);
        }

        String[] things2 = {"honey", "apple", "oranges", "beans","bread", "harrypotter"};
        List<String> list2 = new LinkedList<String>();
        for(String y: things2){ //copy everything in 'things' hold its value in 'x' and add it to 'list2'
            list2.add(y);
        }

        list1.addAll(list2); //this takes everything from 'list2' and adds it to 'list1'
        list2 = null;

        printMe(list1);
        removeStuff(list1, 2, 5); //this will remove items in 'list1' 2 to 4 (because index count starts at 0)
        printMe(list1);
        reverseMe(list1);

    }

    //make sure your out of your Main method
    //https://www.youtube.com/watch?v=rW2OppsgJjQ&index=7&list=PL27BCE863B6A864E3

    //printMe()

    private static void printMe(List<String> myList){
        for(String b : myList){
            System.out.printf("%s ", b);
            System.out.println();
        }
    }

    //removeStuff();
    private static void removeStuff(List<String> myList, int from, int to){
        myList.subList(from, to).clear();
    }


    //reverseMe()
    private static void reverseMe(List<String> myList){
        ListIterator<String> myDamnList = myList.listIterator(myList.size());
        while(myDamnList.hasPrevious()){
            System.out.printf("%s ", myDamnList.previous());
            System.out.println();
        }
    }

    //do not pass
}
