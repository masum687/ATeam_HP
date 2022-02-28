package UtilHp;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;



public class TestBaseHp {
	
	
	public static Properties prop;
	public static WebDriver driver;
	
	public TestBaseHp() {
		
		try {
			FileInputStream fls = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\Hp\\config\\HPConfig.properties");
			prop = new Properties();
			prop.load(fls);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
		public void initz() {
			String Browsername = prop.getProperty("browser1");
			if(Browsername.equals("Chrome")) {
				System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+ "\\Driver\\chromedriver.exe");
				ChromeOptions options = new ChromeOptions();
				options.addArguments("disable-notifications");
				driver = new ChromeDriver(options);
				driver.manage().timeouts().implicitlyWait(UtilOtherHp.implicitlyWait_wait, TimeUnit.SECONDS);
				driver.manage().timeouts().pageLoadTimeout(UtilOtherHp.pageLoadTimeout_wait, TimeUnit.SECONDS);
				driver.manage().window().maximize();
				//driver.findElement(By.xpath("//button[text()='I ACCEPT']")).click();
				driver.manage().deleteAllCookies();

			
			}
			else if(Browsername.equals("FF"));
				System.out.println("Browser not found");
				
		}
		
		public static void launchApplication(String URL) {
			driver.get(prop.getProperty("url"));
			
			try {
				driver.findElement(By.xpath("//button[text()='I ACCEPT']")).click();
				driver.manage().timeouts().implicitlyWait(UtilOtherHp.implicitlyWait_wait, TimeUnit.SECONDS);
				driver.manage().timeouts().pageLoadTimeout(UtilOtherHp.pageLoadTimeout_wait, TimeUnit.SECONDS);
				driver.switchTo().alert().accept();
			} catch (Exception e) {System.out.println("Unexcepted alert not present");
				//e.printStackTrace();
			}
			
		}
}



