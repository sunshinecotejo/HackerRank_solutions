
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String S = in.next();
        in.close();
        try {
            int num = Integer.parseInt(S);
            System.out.println(num);
        } catch (NumberFormatException e) {
            System.out.println("Bad String");
        }
    }
}

