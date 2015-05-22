package packageA;

/**
 * 
 * @author Kingsley
 *
 */
public class SampleB {
	public static void main(String[] args) {
		System.out.println("Called from main");
	}
	
	SampleB() {
		puts("Called from constructor");
	}
	
	void puts(String i) {
		System.out.println(i);
	}
}
