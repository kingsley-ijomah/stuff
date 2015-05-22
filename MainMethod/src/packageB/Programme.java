package packageB;

public class Programme {
	public static void main(String[] args) {
		p("Creating students and courses");
		Student kingsley = new Student("Kingsley", "ijomah");
		Student danielle = new Student("Danielle", "ijomah");
		
		Course maths = new Course("maths");
		Course english = new Course("english");
		Course science = new Course("science");
		
		p("Register students for courses");
		new Registration(kingsley, maths);
		new Registration(danielle, maths);
		new Registration(danielle, english);
		
		p("Get total registrations for courses");
		p("maths: " + getTotalInCourse(maths));
		p("science: " + getTotalInCourse(english));
	}
	
	public static void p(String i) {
		System.out.println(i);
	}
	
	public static String getTotalInCourse(Course c) {
		return Integer.toString(c.getCourseRegTotal());
	}
}
