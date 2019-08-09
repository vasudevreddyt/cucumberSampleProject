package base;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.github.javafaker.Faker;

public class BasePage {
	
	protected static WebDriver driver;
	protected Faker faker;
	
	public BasePage() 
	{
		//this.driver = driver;
		faker = new Faker();
	}	
	
	public void verifyTitle()
	{
		Assert.assertEquals("Dashboard / nopCommerce administration", driver.getTitle());
	}
}