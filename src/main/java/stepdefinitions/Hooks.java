package stepdefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import base.BasePage;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends BasePage {

	//public static WebDriver driver;
	private Properties prop = null;
	private FileInputStream fis = null;
	
	public Hooks(BasePage basePage) 
	{
	}

	/*public static Hooks getInstance(){
        if(instance==null){
            instance = new Hooks();
        }
        return instance;
    }*/
	
	private WebDriver getDriver() {
		prop = new Properties();
		try {
			fis = new FileInputStream("./src/main/resources/util/config.properties");
			prop.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		if (prop.getProperty("browser").equals("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		}
		return driver;
	}

	@Before
	public void init(Scenario scenario) throws IOException {
		System.out.println(scenario.getName());
		driver = getDriver();

		driver.manage().window().maximize();
		driver.get("http://admin-demo.nopcommerce.com/login");
	}

	@AfterStep
	public void afterStep(Scenario scenario)
	{
		if(scenario.isFailed())
		{
			byte[] src = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(src, "image/png");
		}
		
	}
	
	@After
	public void tearDown(Scenario scenario) {
		/*if(scenario.isFailed())
		{
			byte[] src = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(src, "image/png");
		}*/
		
		driver.quit();
	}

	/*
	 * @Before public void setWebDriver(Scenario scenario) throws IOException { prop
	 * = new Properties(); fis = new
	 * FileInputStream("./src/main/resources/util/config.properties");
	 * prop.load(fis);
	 * 
	 * System.out.println(scenario.getName());
	 * 
	 * if(prop.getProperty("browser").equals("chrome")) {
	 * WebDriverManager.chromedriver().setup(); driver = new ChromeDriver(); } else
	 * { WebDriverManager.firefoxdriver().setup(); driver = new FirefoxDriver(); }
	 * 
	 * driver.manage().window().maximize();
	 * driver.get("http://admin-demo.nopcommerce.com/login");
	 * 
	 * /*Capabilities caps = ((RemoteWebDriver) driver).getCapabilities(); String
	 * browserName = caps.getBrowserName(); String browserVersion =
	 * caps.getVersion();
	 * 
	 * System.out.println("Browser Name: "+browserName);
	 * System.out.println("Browser Version: "+browserVersion);
	 */
	// System.out.println("OS Name: "+System.getProperty("os.name"));
	// }*/
}
