package courseAdmin;

public class Student {
	int id;
	String firstName;
	String lastName;
	int birthDay, birthMonth, birthYear;
	static int pages = 200;
	
	public static void main(String[] arg) {
		Student firstStudent = new Student();
		Student secondStudent = new Student();
		
		firstStudent.id = 1;
		firstStudent.firstName = "Danielle";
		
		secondStudent.id = 2;
		secondStudent.firstName = "Kingsley";
		
		System.out.println("Print the first name " + firstStudent);
		
		Student king = new Student();
		System.out.println("Testing: " + Student.pages);
	}
	
	boolean isBirthday() {
		return true;
	}
	
	void giveWarning() {
		// does not have to return value
	}
	
	int numberOfFriends() {
		return 0;
	}
}
