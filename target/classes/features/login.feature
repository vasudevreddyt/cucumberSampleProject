Feature: Login

  Background: 
    When user enter email in email textbox
    And user enter password in password textbox
    And user clicks login button

  Scenario: Verify login functionality
    Then verify the dashboard page
    And logout of the application

  
