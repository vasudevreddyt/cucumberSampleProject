$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/customers.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter email in email textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enter_email_in_email_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user enter password in password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_in_password_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding a New Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerSteps.click_on_customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on customers link",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.click_on_customers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on Add New button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "enter valid email in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.enter_valid_email_in_email_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerSteps.verify_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter email in email textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_email_in_email_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user enter password in password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_in_password_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "verify the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verify_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "logout of the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.logout_of_the_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/logout\"\u003e...\u003c/a\u003e is not clickable at point (1816, 25). Other element would receive the click: \u003cdiv id\u003d\"ajaxBusy\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d75.0.3770.142)\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T20:55:26\u0027\nSystem info: host: \u0027W7M-137776\u0027, ip: \u002710.17.106.249\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\aab3757\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53936}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 187d6ff6f038b364559ccc3aa71fabe6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:308)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pages.LoginPage.clickLogout(LoginPage.java:51)\r\n\tat stepdefinitions.LoginSteps.logout_of_the_application(LoginSteps.java:37)\r\n\tat ✽.logout of the application(file:src/main/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});