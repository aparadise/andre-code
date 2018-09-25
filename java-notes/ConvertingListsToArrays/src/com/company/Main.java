package com.company;

import java.util.*;

public class Main {

    public static void main(String[] args) {
	// https://www.youtube.com/watch?v=Sj2kCLjZZgk&index=8&list=PL27BCE863B6A864E3
        //change it to a list and then pass it back in as an argument with this: new LinkedList<String>(Arrays.asList(stuff))

        String[] stuff = {"babies","waterlong","melons","fudge"};
        LinkedList<String> theList = new LinkedList<String>(Arrays.asList(stuff));

        //by converting 'stuff' to a list (Arrays.asList(stuff) we can now use these functions below add() and addFirst()

            theList.add("BensonTech"); //adds the element to the end
            theList.addFirst("fistTHing"); //adds elements to top
//convert it back to and array
        stuff = theList.toArray(new String[theList.size()]); //converts the list to the array

        for(String x : stuff){
            System.out.printf("%s ", x);
        }

    }
    //do not pass
}
