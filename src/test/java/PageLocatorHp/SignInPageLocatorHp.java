package PageLocatorHp;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import UtilHp.TestBaseHp;

public class SignInPageLocatorHp extends TestBaseHp{

	
public SignInPageLocatorHp () {
		
		PageFactory.initElements(driver, this);
		
	}
@FindBy(how=How.XPATH, using="//a[@class='mainLink downDisclosure']")
public WebElement SignInButton; 

@FindBy(how=How.XPATH, using="//ul[@class='lastBox topmenuchild myAccountDd']//a[contains(text(),'Sign in')]")
public WebElement SiginInLink; 
}
