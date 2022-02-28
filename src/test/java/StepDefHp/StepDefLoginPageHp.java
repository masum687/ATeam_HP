package StepDefHp;

import org.apache.log4j.Logger;

import PageActionHp.HomePageActionHp;
import PageActionHp.LoginPageActionHp;
import PageActionHp.SignInPageActionHp;
import UtilHp.LogsHelperHp;
import UtilHp.TestBaseHp;
import UtilHp.UtilOtherHp;
import cucumber.api.java.en.Then;

public class StepDefLoginPageHp extends TestBaseHp{
	HomePageActionHp homePageAction = new HomePageActionHp();
	SignInPageActionHp signInPageActionHp = new SignInPageActionHp();
	LoginPageActionHp loginPageActionHp = new LoginPageActionHp();
	Logger logHp = LogsHelperHp.getLogsR(LogsHelperHp.class);
	
	
	@Then("^Click On HP\\.com Store$")
	public void click_On_HP_com_Store() throws Throwable {
		homePageAction.ClickOnHPComStore();
	   
	}

	@Then("^Click on Sign in/Register Main link$")
	public void click_on_Sign_in_Register_Main_link() throws Throwable {
	    signInPageActionHp.ClickonSigninRegisterMainlink();
	    logHp.info("Clicking on Signin/Registration");
		UtilOtherHp.takescreenshot(driver, "SignIn Register");
	}

	@Then("^Click on Sign In Link$")
	public void click_on_Sign_In_Link() throws Throwable {
	   signInPageActionHp.ClickonSignInLink();
	   logHp.info("Click on Sign In");
		UtilOtherHp.takescreenshot(driver, "Click on Sign In");
	}

	@Then("^Enter Username and Click Next Link$")
	public void enter_Username_and_Click_Next_Link() throws Throwable {
	loginPageActionHp.usernamedetails(prop.getProperty("usernameHp"));
	logHp.info("UsernameHp");
	UtilOtherHp.takescreenshot(driver, "UsernameHp");
	
	}

	@Then("^Enter Password and Click On SIGN IN Link$")
	public void enter_Password_and_Click_On_SIGN_IN_Link() throws Throwable {
	loginPageActionHp.userpassdetails(prop.getProperty("passwordHp")); 
	logHp.info("Password");
	UtilOtherHp.takescreenshot(driver, "Password");
	}

	@Then("^Verify User Can Login$")
	public void verify_User_Can_Login() throws Throwable {
	loginPageActionHp.verifylogin();   
	logHp.info("Log In Successfully ");
	UtilOtherHp.takescreenshot(driver, "Display Log In Successfully");
	}
	

}