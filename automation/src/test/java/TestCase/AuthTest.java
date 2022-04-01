package TestCase;

import com.aventstack.extentreports.Status;
import config.TestConfig;
import java.util.Random;
import net.bytebuddy.utility.RandomString;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;
import org.openqa.selenium.By;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pages.LoginPage;
import pages.RegisterPage;

@TestMethodOrder(OrderAnnotation.class)
public class AuthTest extends TestConfig {
  LoginPage loginPage ;
  RegisterPage registerPage;
  String user = RandomString.make(6);
  String pass = RandomString.make(8)+"@123";

  @BeforeMethod
  public void setDriver(){
    registerPage = new RegisterPage(driver);
    loginPage = new LoginPage(driver);
  }


  @Test
  @Order(1)
  public void register(){
    test = extent.createTest("Register Test");
    try{
      driver.get("http://localhost:3000/");
      driver.findElement(By.id("signup-main")).click();
      String number = "9123456"+Math.round(Math.random()*1000);
      this.registerPage.register(user,user,number,user+"@user.com",pass);
      test.log(Status.DEBUG,"user "+user+" pass "+pass);
      this.loginPage.login(user,pass);
    }catch (Exception e) {
      test.fail(e.toString());
    }
  }
}
