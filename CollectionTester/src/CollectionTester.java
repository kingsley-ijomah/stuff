import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;


public class CollectionTester {
	public static void main(String[] args) {
		ArrayList<String> listOfStrings = new ArrayList<String>();
		listOfStrings.add("string A");
		listOfStrings.add("string B");
		listOfStrings.add("string C");
		listOfStrings.remove(0);
		
		HashSet<Integer> setOfIntegers = new HashSet<Integer>();
		setOfIntegers.add(1);
		setOfIntegers.add(6);
		setOfIntegers.add(9);
		setOfIntegers.remove(1);
		
		HashMap<String, int[]> mapOfStringToIntegers = new HashMap<String, int[]>();
		mapOfStringToIntegers.put("Kingsley", new int[] {1,2,3,4});
		System.out.println(mapOfStringToIntegers.get("Kingsley"));
	}
}
