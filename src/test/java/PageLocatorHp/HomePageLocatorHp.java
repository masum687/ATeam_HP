package PageLocatorHp;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import UtilHp.TestBaseHp;

public class HomePageLocatorHp extends TestBaseHp {
	
	public HomePageLocatorHp () {
		
		PageFactory.initElements(driver, this);
		
	}
	@FindBy(how=How.XPATH, using="//span[text()='Shop']")
	public WebElement Shop_Option; 
	
	@FindBy(how=How.XPATH, using="//label[@class='unselectable'][normalize-space()='Gaming PCs']")
	public WebElement ClickGamingPcs; 
	
	
	@FindBy(how=How.XPATH, using="//h2[text()='with HP Gaming PCs']")
	public WebElement VerifyGamingPcsPage; 
	
	//Test 2
	
	@FindBy(how=How.ID, using="search_focus_desktop")
	public WebElement SearchField; 
	
	@FindBy(how=How.XPATH, using="//div[@class='wpr-icons-holder']//a[@title='Begin your search']")
	public WebElement SearchLink;
	
	@FindBy(how=How.XPATH, using="//div[@class='typo-container shown']")
	public WebElement ResultDisplayed;
	
	
	//Test 3
	
	@FindBy(how=How.XPATH, using="//a[@id='id57221276cd8ac9107896c9a0b342e778757bb2c99b1a2255c2a5628ab92b0488']//p[contains(text(),'Shop')]")
	public WebElement Shop;
	
	
	@FindBy(how=How.XPATH, using="//a[@id='WC_BreadCrumb_Link_3']//span[@itemprop='name'][text()='HP ENVY']")
	public WebElement VerifyEnvyPrinters;
	
	
	//Test 4 
	
	@FindBy(how=How.XPATH, using="//span[text()='Shop']")
	public WebElement Shop_Option1; 
	
	@FindBy(how=How.XPATH, using="//label[text()='HP.com store'][@class='unselectable']")
	public WebElement HpStore; 
	
}
		

