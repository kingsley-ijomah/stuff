package packageB;

import java.util.HashSet;

public class Registration {
	
	Registration(Student s, Course c) {
		HashSet<Student> registeredStudents = c.getRegisteredStudents();
		registeredStudents.add(s);
	}
}
