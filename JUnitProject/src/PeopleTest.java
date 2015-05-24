import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;


public class PeopleTest {
	People person;
	
	@Before
	public void setUp() {
		person = new People("kingsley", "ijomah", 32);
	}
	
	@Test
	public void getFirstName() {
		assertEquals(person.getFirstName(), "kingsley");
	}
	
	@Test
	public void getLastName() {
		assertEquals(person.getLastName(), "ijomah");
	}
	
	@Test
	public void getAge() {
		assertEquals(32, person.getAge());
	}
	
	@Test
	public void isEmployed() {
		// person is employed by default
		assertTrue(person.isEmployed());
	}
	
	@Test
	public void setEmployment() {
		person.setEmployment(false);
		assertFalse(person.isEmployed());
		
		person.setEmployment(true);
		assertTrue(person.isEmployed());
	}

}
