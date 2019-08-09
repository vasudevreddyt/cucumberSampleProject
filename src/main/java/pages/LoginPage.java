package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BasePage;

public class LoginPage extends BasePage{
	
	@FindBy(id="Email") 
	private WebElement emailTextbox;
	
	@FindBy(id="Password") 
	private WebElement passwordTextbox;
	
	@FindBy(xpath="//input[@value='Log in']") 
	private WebElement loginButton;
	
	@FindBy(xpath = "//a[@href='/logout']")
	private WebElement logoutButton;
	
	public LoginPage()
	{
		PageFactory.initElements(driver, this);
	}
		
	public void enterEmail()
	{
		emailTextbox.sendKeys("admin@yourstore.com");
	}
	
	public void enterPassword()
	{
		passwordTextbox.sendKeys("admin");
	}
	
	public void clickLogin()
	{
		loginButton.click();
	}
	
	public void clickLogout() throws InterruptedException
	{
		// move wait logics to BasePage to access in all other pages.
		/*WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.elementToBeClickable(logoutButton));*/
		
		//Thread.sleep(5000);
		
		logoutButton.click();
	}
}