package UtilHp;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class UtilOtherHp {
		
	public static long implicitlyWait_wait = 20;
	public static long pageLoadTimeout_wait = 20;	
	

	
public static void takescreenshot(WebDriver driver, String screenshot) {
	
	File srcfile= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	
	String currentdir = System.getProperty("user.dir");
	
	try {
		FileUtils.copyFile(srcfile, new File(currentdir+"/ScreenShots/"+screenshot+".png"));
	} catch (IOException e) {
		e.printStackTrace();
	}
}
}

