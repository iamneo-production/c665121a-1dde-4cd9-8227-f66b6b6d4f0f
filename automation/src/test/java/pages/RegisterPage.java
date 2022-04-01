package pages;

import config.TestConfig;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegisterPage extends TestConfig {
  WebDriver driver;
  WebDriverWait wait;

  public RegisterPage(WebDriver driver){
    this.driver = driver;
    this.wait = new WebDriverWait(driver, 15);
    PageFactory.initElements(driver,this);
  }

  @FindBy(id = "name")
  WebElement nameEle;

  @FindBy(id = "username")
  WebElement userName;

  @FindBy(id = "mobilenumber")
  WebElement mobileEle;

  @FindBy(id = "email")
  WebElement emailEle;

  @FindBy(id = "password")
  WebElement passWord;

  @FindBy(id = "registerbutton")
  WebElement register;

  @FindBy(id = "resetbutton")
  WebElement reset;

  @FindBy(id = "loginbutton")
  WebElement verifyLandingLink;

  public void register(String name,String strUserName,String mobile,String email,String strPassword){
    this.wait.until(ExpectedConditions.visibilityOf(nameEle));
    nameEle.sendKeys(name);
    this.wait.until(ExpectedConditions.visibilityOf(userName));
    userName.sendKeys(strUserName);
    this.wait.until(ExpectedConditions.visibilityOf(mobileEle));
    mobileEle.sendKeys(mobile);
    this.wait.until(ExpectedConditions.visibilityOf(emailEle));
    emailEle.sendKeys(email);
    this.wait.until(ExpectedConditions.visibilityOf(passWord));
    passWord.sendKeys(strPassword);
    this.wait.until(ExpectedConditions.visibilityOf(register));
    register.click();
    this.wait.until(ExpectedConditions.visibilityOf(verifyLandingLink));
  }
}
