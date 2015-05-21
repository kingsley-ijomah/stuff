package courseAdmin;

public class Final {
	// cannot be re-initialized
	final static String author = "kingsley Ijomah";
	
	public static void main(String[] args) {
		Final name = new Final();
		// works through object but with warning
		System.out.println("author's name: " + name.author);
		// works best through class name
		System.out.println("author's name: " + Final.author);
		// cannot be assigned
		// Final.author = "Ijomah";
	}
}
