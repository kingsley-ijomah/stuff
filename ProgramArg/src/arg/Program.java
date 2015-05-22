package arg;

public class Program {
	public static void main(String[] args) {
		for(int i = 0; i < args.length; i++) {
			p("Argument: " + args[i]);
		}
	}
	
	static void p(String i) {
		System.out.println(i);
	}
}
