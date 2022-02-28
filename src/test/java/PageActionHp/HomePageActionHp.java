package PageActionHp;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import PageLocatorHp.HomePageLocatorHp;
import UtilHp.TestBaseHp;

public class HomePageActionHp extends TestBaseHp {
		
	HomePageLocatorHp homePageLocatorHp = new HomePageLocatorHp();
	
	public void MouseOvertoShop ()  {
		Actions MouseOver = new Actions (driver);
		MouseOver.moveToElement(homePageLocatorHp.Shop_Option).build().perform();
		
			}
	
	public void ClickonGamingPcs () {
		homePageLocatorHp.ClickGamingPcs.click();
		
	}
	
	public void VerifyGamingPcsPageDisplay () {
		boolean result = homePageLocatorHp.VerifyGamingPcsPage.isDisplayed();
		Assert.assertTrue(result);
		
	}
	// Test 2
	public void EnterHPChromebookInSearchField () {
		homePageLocatorHp.SearchField.clear();
		homePageLocatorHp.SearchField.sendKeys("Hp Chromebook");
		
	}
	
	public void ClickonSearchLink () {
		homePageLocatorHp.SearchLink.click();
		
	}
	
	public void VerifySearchResultDisplay () {
		boolean HpResult = homePageLocatorHp.ResultDisplayed.isDisplayed();
		Assert.assertTrue(HpResult);
		System.out.println("Hp Search Result Is Displayed");

	}
	//Test 3 
	
	public void ClickOnShopUnderFamilyPrinterOption() {
		//Use Scroll Down Method
		((JavascriptExecutor)driver).executeScript("scroll(0,800)");
		homePageLocatorHp.Shop.click();
		
	}
	
	public void VerifyHpEnvyPrintersPageDisplay () {
		boolean ResultEnvy = homePageLocatorHp.VerifyEnvyPrinters.isDisplayed();
		Assert.assertTrue(ResultEnvy);
		System.out.println("Hp Envy Printers Is Displayed");
	}
	//Test 4

	public void MouseOvertoShop1 ()  {
		Actions MouseOver = new Actions (driver);
		MouseOver.moveToElement(homePageLocatorHp.Shop_Option).build().perform();
	}	
		
	public void ClickOnHPComStore() {
		
		homePageLocatorHp.HpStore.click();
		
	}
			}
	
	
	
	
	

