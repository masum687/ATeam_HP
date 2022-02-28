Feature: Home Page 


@Test
Scenario: Verify Gaming Pcs Page
Given Open Application "<URL>"
Then Mouse Over to Shop 
And Click on Gaming Pcs
Then Verify Gaming Pcs Page Display



@Test
Scenario: Verify Search Result Display
Given Open Application "<URL>"
Then Enter HP Chromebook In Search Field
And Click on Search Link
Then Verify Search Result Display

@Test
Scenario: Verify Hp Envy Printers Page Display
Given Open Application "<URL>"
Then Click On Shop Under Family Printer Option
And Verify Hp Envy Printers Page Display
















