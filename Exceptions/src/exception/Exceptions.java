package exception;

public class Exceptions {
	String error;
	int code;
	Sample sample;
	// below solves the issue
	// Sample sample = new Sample();
	
	public static void main(String[] args) {
		Exceptions exp = new Exceptions();
		// no exceptions null and 0 are defaulted to
		p("thrown error: " + exp.error + " with code: " + exp.code);
		
		// throws an exception
		p("call Sample's name field " + exp.sample.getName());
	}
	
	public static void p(String i) {
		System.out.println(i);
	}
}
