package calls;

public class SC extends C {
	public void op(SC c) {
		System.out.println('3');
	}
	
	public void op(C c) {
		System.out.println('2');
	}
}
