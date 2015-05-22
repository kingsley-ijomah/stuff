package packageB;

public class Student {
	final String firstName, lastName;
	
	Student(String fn, String ln) {
		firstName = fn;
		lastName = ln;
	}
	
	String getFirstName() {
		return firstName;
	}
	
	String getLastName() {
		return lastName;
	}
}
