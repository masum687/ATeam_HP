package TestRunnerHp;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import UtilHp.TestBaseHp;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/resources/FeatureAT"},
plugin = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},

glue = {"StepDefHp"},
tags = {"@Test"},
monochrome = true)


public class TestRunner_Hp extends AbstractTestNGCucumberTests {

	@BeforeTest
	public void LaunchAppURL() {
		TestBaseHp Open = new TestBaseHp();
		Open.initz();
		
	}

	@AfterTest
	public void CloseAppURL() {
		TestBaseHp Closed = new TestBaseHp();
		Closed.driver.quit();
	
	
	}
	
}
