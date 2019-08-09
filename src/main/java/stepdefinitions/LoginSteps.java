package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import pages.LoginPage;

public class LoginSteps {

	LoginPage loginPage;
	
	public LoginSteps(Hooks hooks) {
		loginPage = new LoginPage();
	}

	@Then("^user enter email in email textbox$")
	public void user_enter_email_in_email_textbox() throws Throwable {
		loginPage.enterEmail();
	}

	@Then("^verify the dashboard page$")
	public void verify_the_dashboard_page() throws Throwable {
		loginPage.verifyTitle();
	}

	@And("^user enter password in password textbox$")
	public void user_enter_password_in_password_textbox() throws Throwable {
		loginPage.enterPassword();
	}

	@And("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		loginPage.clickLogin();
	}

	@And("^logout of the application$")
	public void logout_of_the_application() throws Throwable {
		loginPage.clickLogout();
	}
}