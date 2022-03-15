package config;

import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Test;

public class DemoTest extends TestConfig{

  @Test
  public void demo(){
    test = extent.createTest("Demo Test");
    Reporter.log("working");
    Assert.assertEquals(1,1);
  }
}
