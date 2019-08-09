Feature: Customers

Background:
	Then user enter email in email textbox
    And user enter password in password textbox
    And user clicks login button

Scenario: Adding a New Customer
    When click on customers menu
    And click on customers link
    And click on Add New button
    And enter valid email in email textbox
    And click on save button
    Then verify the success message