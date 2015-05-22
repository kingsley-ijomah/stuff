package courseAdmin;

public class FinalB {
	String firstName;
	String lastName;
	Integer age;
	final String country;
	
	FinalB(String c) {
		country = c;
	}
	
	public static void main(String[] args) {
		final FinalB object = new FinalB("uk");
		
		//initialize our instance variables
		object.firstName = "kingsley";
		object.lastName = "Ijomah";
		
		//print out values
		System.out.println("Firstname: " + object.firstName);
		System.out.println("Lastname: " + object.lastName);
		
		//it is possible to change objects attributes / fields
		object.firstName = "james";
		System.out.println("Firstname: " + object.firstName);
		
		// cannot re-assign into final
		// object = new FinalB();
		
		// make ages into a final variable
		final int[] ages = new int[] {27, 30, 34};
		// it is possible to change its internal attributes
		ages[0] = 50;
		
		// but cannot resign ages
		//ages = new int[] {20, 18};
		
		System.out.println(ages[0]);
	}
}
