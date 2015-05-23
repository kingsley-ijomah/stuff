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
		
		HashMap<String, Integer> mapOfStringToIntegers = new HashMap<String, Integer>();
		mapOfStringToIntegers.put("Kingsley", 2);
		mapOfStringToIntegers.put("Bob", 20);
		mapOfStringToIntegers.put("Danielle", 20);
		mapOfStringToIntegers.remove("Bob");
	}
}
