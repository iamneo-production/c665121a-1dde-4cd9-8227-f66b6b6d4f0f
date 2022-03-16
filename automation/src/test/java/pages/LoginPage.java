package pages;

import config.TestConfig;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage extends TestConfig {
  WebDriver driver;
  WebDriverWait wait;

  public LoginPage(WebDriver driver){
    this.driver = driver;
    this.wait = new WebDriverWait(driver, 15);
    PageFactory.initElements(driver,this);
  }

  @FindBy(id = "username")
  WebElement userName;

  @FindBy(id = "password")
  WebElement passWord;

  @FindBy(id = "loginbutton")
  WebElement login;

  @FindBy(id = "resetbutton")
  WebElement reset;

  @FindBy(id = "landinglink")
  WebElement verifyLandingLink;

  public void login(String strUserName,String strPasword){
      this.wait.until(ExpectedConditions.visibilityOf(userName));
      userName.sendKeys(strUserName);
      this.wait.until(ExpectedConditions.visibilityOf(passWord));
      passWord.sendKeys(strPasword);
      this.wait.until(ExpectedConditions.visibilityOf(login));
      login.click();
      this.wait.until(ExpectedConditions.visibilityOf(verifyLandingLink));
  }
}
