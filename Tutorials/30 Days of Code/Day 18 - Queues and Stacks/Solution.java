import java.util.*;

public class Solution {
    // Write your code here.
    
    Deque<Character> stackAsQueue = new ArrayDeque<Character>();
    Deque<Character> stackAsStack = new ArrayDeque<Character>();

    void pushCharacter(char c) {
        stackAsStack.push(c);
    }

    char popCharacter() {
        return (char) stackAsStack.pop();
    }

    void enqueueCharacter(char c) {
        stackAsQueue.add(c);
    }

    char dequeueCharacter() {
        return stackAsQueue.remove();
    }

    public static void main(final String[] args) {
        final Scanner scan = new Scanner(System.in);
        final String input = scan.nextLine();
        scan.close();

        // Convert input String to an array of characters:
        final char[] s = input.toCharArray();

        // Create a Solution object:
        final Solution p = new Solution();

        // Enqueue/Push all chars to their respective data structures:
        for (final char c : s) {
            p.pushCharacter(c);
            p.enqueueCharacter(c);
        }

        // Pop/Dequeue the chars at the head of both data structures and compare them:
        boolean isPalindrome = true;
        for (int i = 0; i < s.length/2; i++) {
            if (p.popCharacter() != p.dequeueCharacter()) {
                isPalindrome = false;                
                break;
            }
        }

        //Finally, print whether string s is palindrome or not.
        System.out.println( "The word, " + input + ", is " 
                           + ( (!isPalindrome) ? "not a palindrome." : "a palindrome." ) );
    }
}