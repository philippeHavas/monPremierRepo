package dojo;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;  

@RunWith(Cucumber.class)  
@CucumberOptions(features="src/test/resources",strict = true,monochrome=true, plugin = { "pretty", "json:target/cucumber.json", "html:target/site/cucumber", "junit:target/cucumber.xml" }) 

public class RunCucumberTest {

}
