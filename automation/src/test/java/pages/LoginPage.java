package pages;

import config.TestConfig;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage extends TestConfig {
  WebDriver driver;

  By UserName = By.id("username");

  By password = By.id("password");

  By titleText =By.id("barone");

  By login = By.id("loginbutton");

  By reset = By.id("resetbutton");

  public LoginPage(WebDriver driver){
    this.driver = driver;
  }

  public void setUserName(String strUserName){
    driver.findElement(UserName).sendKeys(strUserName);
  }

  public void setPassword(String strPassword){
    driver.findElement(password).sendKeys(strPassword);
  }

  public void clickLogin(){
    driver.findElement(login).click();
  }

  public void clickReset(){
    driver.findElement(reset).click();
  }

  public String getLoginTitle(){
    return    driver.findElement(titleText).getText();
  }

  public void login(String strUserName,String strPasword){

    this.setUserName(strUserName);

    this.setPassword(strPasword);

    this.clickLogin();
  }
}
