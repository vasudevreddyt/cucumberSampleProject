package runnerpack;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "./src/main/resources/features" }, glue = "stepdefinitions", plugin = { "pretty",
		"html:target/cucumber-reports", "json:target/cucumber-report/cucumber.json" }, dryRun = false)
public class RunnerTest {

}
