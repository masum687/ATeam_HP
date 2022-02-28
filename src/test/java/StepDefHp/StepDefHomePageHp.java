package StepDefHp;

import org.apache.log4j.Logger;

import PageActionHp.HomePageActionHp;
import UtilHp.LogsHelperHp;
import UtilHp.TestBaseHp;
import UtilHp.UtilOtherHp;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class StepDefHomePageHp extends TestBaseHp {
	HomePageActionHp homePageAction = new HomePageActionHp();
	Logger logHp = LogsHelperHp.getLogsR(LogsHelperHp.class);
	
		
	@Given("^Open Application \"([^\"]*)\"$")
	public void open_Application(String URL) throws Throwable {
		launchApplication(URL);
		logHp.info("Opening URL");
	}

	@Then("^Mouse Over to Shop$")
	public void mouse_Over_to_Shop() throws Throwable {
		homePageAction.MouseOvertoShop();
		logHp.info("Mouse Over To Shop");
		UtilOtherHp.takescreenshot(driver, "MouseOver");
	   
	}

	@Then("^Click on Gaming Pcs$")
	public void click_on_Gaming_Pcs() throws Throwable {
	  homePageAction.ClickonGamingPcs();
	  logHp.info("Clicking On Gaming Pcs Option");
	  UtilOtherHp.takescreenshot(driver, "Clicking On Gameing Pcs");
	}

	@Then("^Verify Gaming Pcs Page Display$")
	public void verify_Gaming_Pcs_Page_Display() throws Throwable {
		homePageAction.VerifyGamingPcsPageDisplay();
		System.out.println("Verify Gaming is Displayed");
		logHp.info("Verifying Gaming Display");
		UtilOtherHp.takescreenshot(driver, "Gaming Pcs Displayed");
		
	    
	}

	@Then("^Enter HP Chromebook In Search Field$")
	public void enter_HP_Chromebook_In_Search_Field() throws Throwable {
		homePageAction.EnterHPChromebookInSearchField();
		logHp.info("Search Hp Chromebook");
		UtilOtherHp.takescreenshot(driver, "Enter Hp Chromebook On Searchfield");
	   
	}

	@Then("^Click on Search Link$")
	public void click_on_Search_Link() throws Throwable {
	    homePageAction.ClickonSearchLink();
	    logHp.info("Click on SearchLink");
	}

	@Then("^Verify Search Result Display$")
	public void verify_Search_Result_Display() throws Throwable {
		homePageAction.VerifySearchResultDisplay();
		logHp.info("Search Result Displayed");
		UtilOtherHp.takescreenshot(driver, "Search Result Displayed");
	}
	
	   
	@Then("^Click On Shop Under Family Printer Option$")
	public void click_On_Shop_Under_Family_Printer_Option() throws Throwable {
		    homePageAction.ClickOnShopUnderFamilyPrinterOption();
		    logHp.info("Shop Under Family Printer");
			UtilOtherHp.takescreenshot(driver, "Clicking on Family Printer");
		
	}

	@Then("^Verify Hp Envy Printers Page Display$")
	public void verify_Hp_Envy_Printers_Page_Display() throws Throwable {
		    homePageAction.VerifyHpEnvyPrintersPageDisplay();
		    logHp.info("Verify Hp Envy");
			UtilOtherHp.takescreenshot(driver, "Verify Hp Envy Results");
		    
			
	}
	
	
}
