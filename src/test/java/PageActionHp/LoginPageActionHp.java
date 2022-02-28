package PageActionHp;

import org.testng.Assert;

import PageLocatorHp.LoginPageLocatorHp;
import UtilHp.TestBaseHp;

public class LoginPageActionHp extends TestBaseHp{
	
	LoginPageLocatorHp loginPageLocatorHp = new LoginPageLocatorHp ();
	
	public void usernamedetails (String u) {
		loginPageLocatorHp.Username.sendKeys(u);
		loginPageLocatorHp.NextButton.click();
	}	
		
	public void userpassdetails (String p) {	
	loginPageLocatorHp.Password.sendKeys(p);
	loginPageLocatorHp.LogInButton.click();	
	}	
		
	public void verifylogin () {
		boolean loginVerification = loginPageLocatorHp.VerifyLogIn.isDisplayed();
		Assert.assertTrue(loginVerification);
		System.out.println("User can login");
	}
	
}
