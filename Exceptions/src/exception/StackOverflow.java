package exception;

public class StackOverflow {
	public void first() {
		this.second();
	}
	
	public void second() {
		this.first();
	}
}
