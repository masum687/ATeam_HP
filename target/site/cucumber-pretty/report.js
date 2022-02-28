$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePageHp.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page",
  "description": "",
  "id": "home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify Gaming Pcs Page",
  "description": "",
  "id": "home-page;verify-gaming-pcs-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Mouse Over to Shop",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Gaming Pcs",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify Gaming Pcs Page Display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 3220604200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.mouse_Over_to_Shop()"
});
formatter.result({
  "duration": 926591500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.click_on_Gaming_Pcs()"
});
formatter.result({
  "duration": 1990060600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.verify_Gaming_Pcs_Page_Display()"
});
formatter.result({
  "duration": 546533700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Search Result Display",
  "description": "",
  "id": "home-page;verify-search-result-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter HP Chromebook In Search Field",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on Search Link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Search Result Display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 21336215800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.enter_HP_Chromebook_In_Search_Field()"
});
formatter.result({
  "duration": 792560500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.click_on_Search_Link()"
});
formatter.result({
  "duration": 1269688800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.verify_Search_Result_Display()"
});
formatter.result({
  "duration": 20078107800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027typo-container shown\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LENOVOYOGA\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\m2mma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59846}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fa0b8ebe6fc3e65fa64c97693840daa8\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027typo-container shown\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat PageActionHp.HomePageActionHp.VerifySearchResultDisplay(HomePageActionHp.java:43)\r\n\tat StepDefHp.StepDefHomePageHp.verify_Search_Result_Display(StepDefHomePageHp.java:65)\r\n\tat ✽.Then Verify Search Result Display(HomePageHp.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Hp Envy Printers Page Display",
  "description": "",
  "id": "home-page;verify-hp-envy-printers-page-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Click On Shop Under Family Printer Option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify Hp Envy Printers Page Display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 20936758500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.click_On_Shop_Under_Family_Printer_Option()"
});
formatter.result({
  "duration": 20023602800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@id\u003d\u0027id57221276cd8ac9107896c9a0b342e778757bb2c99b1a2255c2a5628ab92b0488\u0027]//p[contains(text(),\u0027Shop\u0027)]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LENOVOYOGA\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\m2mma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59846}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fa0b8ebe6fc3e65fa64c97693840daa8\n*** Element info: {Using\u003dxpath, value\u003d//a[@id\u003d\u0027id57221276cd8ac9107896c9a0b342e778757bb2c99b1a2255c2a5628ab92b0488\u0027]//p[contains(text(),\u0027Shop\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat PageActionHp.HomePageActionHp.ClickOnShopUnderFamilyPrinterOption(HomePageActionHp.java:53)\r\n\tat StepDefHp.StepDefHomePageHp.click_On_Shop_Under_Family_Printer_Option(StepDefHomePageHp.java:73)\r\n\tat ✽.Then Click On Shop Under Family Printer Option(HomePageHp.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefHomePageHp.verify_Hp_Envy_Printers_Page_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("LoginPageHp.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Can Login",
  "description": "",
  "id": "login;verify-user-can-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Mouse Over to Shop",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click On HP.com Store",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Sign in/Register Main link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Sign In Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter Username and Click Next Link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter Password and Click On SIGN IN Link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify User Can Login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 21129993300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.mouse_Over_to_Shop()"
});
formatter.result({
  "duration": 428642800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.click_On_HP_com_Store()"
});
formatter.result({
  "duration": 3554968200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.click_on_Sign_in_Register_Main_link()"
});
formatter.result({
  "duration": 2688593700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 20345780700,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LENOVOYOGA\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\m2mma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59846}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fa0b8ebe6fc3e65fa64c97693840daa8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat PageActionHp.SignInPageActionHp.ClickonSignInLink(SignInPageActionHp.java:18)\r\n\tat StepDefHp.StepDefLoginPageHp.click_on_Sign_In_Link(StepDefLoginPageHp.java:35)\r\n\tat ✽.And Click on Sign In Link(LoginPageHp.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefLoginPageHp.enter_Username_and_Click_Next_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLoginPageHp.enter_Password_and_Click_On_SIGN_IN_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLoginPageHp.verify_User_Can_Login()"
});
formatter.result({
  "status": "skipped"
});
});