package PageActionHp;

import PageLocatorHp.SignInPageLocatorHp;
import UtilHp.TestBaseHp;

public class SignInPageActionHp extends TestBaseHp{

	SignInPageLocatorHp signInPageLocatorHp = new SignInPageLocatorHp (); 
			
	
	public void ClickonSigninRegisterMainlink () {
		signInPageLocatorHp.SignInButton.click();
	}
	
	
	
	public void ClickonSignInLink () {
		signInPageLocatorHp.SiginInLink.click();
}

}

