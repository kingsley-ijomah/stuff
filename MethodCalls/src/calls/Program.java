package calls;

public class Program {
	public static void main(String[] args) {
		C c = new C();
		C c2 = new SC();
		SC sc = new SC();
		
		sc.op(c); sc.op(c2); sc.op(sc);
		c2.op(c); c2.op(c2); c2.op(sc);
		c.op(c); c.op(c2); c.op(sc);
	}
}
