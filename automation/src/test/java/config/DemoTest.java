package config;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.LoginPage;

public class DemoTest extends TestConfig{
  LoginPage loginPage ;
  @BeforeMethod
  public void setDriver(){
    loginPage = new LoginPage(driver);
  }

  @Test
  public void demo(){
    test = extent.createTest("Demo Test");
    try{
      driver.findElement(By.id("login-main")).click();
      this.loginPage.login("admin","admin@123");
    }catch (Exception e) {
      test.fail(e.toString());
    }
  }
}
