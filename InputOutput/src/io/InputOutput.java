package io;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class InputOutput {
	public static void main(String[] args) {
		List<String> groceries = new ArrayList<>();
		try {
			groceries = Files.readAllLines(Paths.get("/tmp/groceries.txt"), Charset.defaultCharset());
		} catch(IOException | SecurityException e) {
			e.printStackTrace();
		}
		for (String item : groceries) {
			System.out.println("Dont forget to pick up: " + item);
		}
	}
}
