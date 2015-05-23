
public class StringTester {
	public static void main(String[] args) {
		String string = "";
		long startTime1 = System.currentTimeMillis();
		for(int i = 0; i < 100000; i++) {
			string += "b";
		}
		long finishTime1 = System.currentTimeMillis();
		
		StringBuilder stringBuilder = new StringBuilder();
		long startTime2 = System.currentTimeMillis();
		for(int i = 0; i < 100000; i++) {
			stringBuilder.append("a");
		}
		long finishTime2 = System.currentTimeMillis();
		
		System.out.println("String took: " + (finishTime1 - startTime1)+"ms");
		System.out.println("String took: " + (finishTime2 - startTime2)+"ms");
	}
}
