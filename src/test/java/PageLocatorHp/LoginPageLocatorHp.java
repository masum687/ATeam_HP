package PageLocatorHp;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import UtilHp.TestBaseHp;

public class LoginPageLocatorHp extends TestBaseHp {
	
	
public LoginPageLocatorHp () {
		
	PageFactory.initElements(driver, this);
		
	}

	@FindBy(how=How.ID, using="username")
	public WebElement Username; 

	@FindBy(how=How.ID, using="next_button")
	public WebElement NextButton; 

	@FindBy(how=How.ID, using="password")
	public WebElement Password; 

	@FindBy(how=How.XPATH, using="//button[@class='vn-button vn-button--critical vn-button--expanded']")
	public WebElement LogInButton; 

	@FindBy(how=How.XPATH, using="//a[@class='mainLink downDisclosure']")
	public WebElement VerifyLogIn; 
	}
