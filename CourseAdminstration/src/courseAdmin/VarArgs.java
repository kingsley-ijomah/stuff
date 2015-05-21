package courseAdmin;

/**
 * Explore the power of varargs
 * 
 * @author Kingsley
 *
 */
public class VarArgs {
	public static void main(String[] args) {
		VarArgs name = new VarArgs();
		name.nickNames("kingsley", "danielle");
	}
	
	// accepts arbitrary number of string arguments
	void nickNames(String...names) {
		// print total args passed
		System.out.println(names.length);
	}
}
