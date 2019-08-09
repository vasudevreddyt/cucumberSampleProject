package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BasePage;

public class CustomerPage extends BasePage{
	
	@FindBy(xpath="//ul[contains(@class,'sidebar-menu')]/li[4]/a")
	private WebElement cutomersMenu;
	
	@FindBy(xpath = "//a[@href='/Admin/Customer/List']")
	private WebElement customersLink;
	
	@FindBy(xpath = "//a[@href='/Admin/Customer/Create']")
	private WebElement addNewButton;
	
	@FindBy(id="Email")
	private WebElement emailTextbox;
	
	@FindBy(name = "save")
	private WebElement saveButton;
	
	public CustomerPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public void clickCustomerMenu()
	{
		cutomersMenu.click();
	}
	
	public void clickCustomersLink()
	{
		customersLink.click();
	}
	
	public void clickAddNewButton()
	{
		addNewButton.click();
	}
	
	public void enterEmail()
	{
		emailTextbox.sendKeys(faker.internet().emailAddress());
	}
	
	public void clickSaveButton()
	{
		saveButton.click();
	}
	
}
