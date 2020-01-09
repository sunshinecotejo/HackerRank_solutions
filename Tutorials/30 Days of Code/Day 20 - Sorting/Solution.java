import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    private static int swaps = 0;

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] a = new int[n];
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
        }
        // Write Your Code Here
        in.close();
        
        bubbleSort(a);
        
        System.out.println("Array is sorted in " + swaps + " swaps.");
        System.out.println("First Element: " + a[0]);
        System.out.println("Last Element: " + a[a.length - 1]);
    }

    private static void bubbleSort(int [] array) {
        if (array == null) {
            return;
        }
        boolean swapped = true;
        int endOffset = 0; // optimizes code
        while (swapped) {
            swapped = false;
            for (int i = 1; i < array.length - endOffset; i++) {
                if (array[i-1] > array[i]){
                    swap(array, i-1, i);
                    swapped = true;
                }
            }
            endOffset++;
        }
    }
    
    /* Standard swap. Also updates our "swaps" variable */
    private static void swap(int [] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        swaps++;
    }
}

