
public class People {
	String firstName;
	String lastName;
	int age;
	boolean employed;
	
	People(String fn, String ln, int age) {
		this.firstName = fn;
		this.lastName = ln;
		this.age = age;
	    this.employed = true;
	}
	
	String getFirstName() {
		 return this.firstName;
	}
	
	String getLastName() {
		return this.lastName;
	}
	
	int getAge() {
		return this.age;
	}
	
	boolean isEmployed() {
		return this.employed;
	}
	
	void setEmployment(boolean b) {
		this.employed = b;
	}
}
