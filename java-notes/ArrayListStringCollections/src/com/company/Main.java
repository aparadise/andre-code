package com.company;

import java.util.*;

//https://www.youtube.com/watch?v=jU5ACV5MucM&list=PL27BCE863B6A864E3&index=4
// https://www.youtube.com/watch?v=uoLgfgcB3XQ&index=5&list=PL27BCE863B6A864E3

public class Main {

    public static void main(String[] args){
        String[] myFamilyNames = {"andre", "tony", "gil", "robert", "rita"};
        List<String> list1 = new ArrayList<String>(); //<> this is called casting. When using it you must call it twice and pass in what type of casting it will be.

        //add array items to the list
        // i am comparing two strings. i am matching 'myFamilyNames' with 'list1'
        // if 'list1' has anything with the same name that's in the 'myFamilyName' array
        // then take it out.

        //add array items to the list
        for(String x: myFamilyNames) {
            list1.add(x);
        }
        String[] moreNames = {"mina","mason","josiah", "rita", "andre"};
        List<String> list2 = new ArrayList<String>();


        //add array items to the list2 that's NOT in list1
        for(String y: moreNames) {
            list2.add(y);
        }

        //print the list
        for (int i=0; i<list1.size(); i++){
            System.out.printf(" %s ", list1.get(i)  ); //"%s" means string and "printf" means fromat.
        }

        // https://www.youtube.com/watch?v=uoLgfgcB3XQ&index=5&list=PL27BCE863B6A864E3
        editList(list1,list2);
        System.out.println(); //this just prints a blank line

        //print the list
        for (int i=0; i<list1.size(); i++){
            System.out.printf(" %s ", list1.get(i)  ); //"%s" means string and "printf" means fromat.
        }

    }

        public static void editList(Collection<String>l1, Collection<String>l2){

        //"Iterator" goes through line item by item
            //.hasNext() means loop till you get to the end of the list
            Iterator<String> it = l1.iterator();

            while(it.hasNext()){
                if(l2.contains(it.next())) { //.contains will only delete what i have and keep what I don't and go to the next() and check
                    it.remove();
                }
            }


        }


}
