package packageB;

import java.util.HashSet;

public class Course {
	final String name;
	final HashSet<Student> record = new HashSet<Student>();
	
	Course(String n) {
		name = n;
	}
	
	String getName() {
		return name;
	}
	
	HashSet<Student> getRegisteredStudents() {
		return record;
	}
	
	int getCourseRegTotal() {
		return record.size();
	}
}
