package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.CustomerPage;

public class CustomerSteps {
	
	CustomerPage customerPage;
		
	public CustomerSteps(Hooks hooks)
	{
		customerPage = new CustomerPage();
	}

	@When("^click on customers menu$")
    public void click_on_customers_menu() throws Throwable {
		customerPage.clickCustomerMenu();
    }

    @Then("^verify the success message$")
    public void verify_the_success_message() throws Throwable {
    	
    }

    @And("^click on customers link$")
    public void click_on_customers_link() throws Throwable {
    	customerPage.clickCustomersLink();
    }

    @And("^click on Add New button$")
    public void click_on_add_new_button() throws Throwable {
    	customerPage.clickAddNewButton();
    }

    @And("^enter valid email in email textbox$")
    public void enter_valid_email_in_email_textbox() throws Throwable {
    	customerPage.enterEmail();
    }

    @And("^click on save button$")
    public void click_on_save_button() throws Throwable {
    	customerPage.clickSaveButton();
    }
}
