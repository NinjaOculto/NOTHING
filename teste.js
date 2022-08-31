
const { WebDriver } = require("selenium-webdriver");
const { until } = require("selenium-webdriver");
const { WebElement } = require("selenium-webdriver");
const {Builder, By, Key, util} = require("selenium-webdriver");
const { ableToSwitchToFrame } = require("selenium-webdriver/lib/until");
const idBtn = "u_0_d_UB";
const name = "christianehfiur11";
const email= "christianehfiur11@gmail.com";
const password = "291607Ga*"

async function example(){
    let driver = await new Builder().forBrowser("firefox").build(); 
    await driver.get("https://www.oracle.com/br/cloud/free/");
    await driver.findElement(By.css("div[class='obttn1']>a")).click();
    await driver.findElement(By.id("cloudAccountName")).sendKeys(name);
    await driver.findElement(By.id("cloudAccountButton")).click(); 
    setTimeout(async()=>{
          const emailInput = By.id("idcs-signin-basic-signin-form-username");
          await driver.findElement(emailInput).sendKeys(email);
          await driver.findElement(By.id("idcs-signin-basic-signin-form-password|input")).sendKeys(password, Key.ENTER);
          teste(driver)
    }, 55000)

}

async function teste(driver){
  setTimeout(async() =>{
    await driver.navigate().to("https://cloud.oracle.com/compute/instances");
  },14000)

  setTimeout(async()=>{
    const iframe = await driver.findElement(By.id("sandbox-compute-container"));
    await driver.switchTo().frame(iframe);
  }, 25000)

  setTimeout(async()=>{
    await driver.findElement(By.className("radio-select")).click();
    await driver.wait(until.elementLocated(By.className('root')), 1000);
    await driver.wait(until.elementLocated(By.className('node')), 1000);
    await driver.findElement(By.className("node")).click("");
    await driver.wait(until.elementLocated(By.id("instance-list-table-primary-button")),1000);
    await driver.findElement(By.id("instance-list-table-primary-button")).click();
    await driver.wait(until.elementLocated(By.className("oui-button-link")),1000);
    const elementoPai = await driver.findElement(By.css("fieldset[data-test-id='image-shape-fieldset']"));
    await elementoPai.findElement(By.css("div[class='oui-margin-left oui-flex oui-flex-top oui-flex-']>button")).click();
    await driver.sleep(20000)
    await driver.findElement(By.css("button[data-test-id='change-image-button']")).click();
    await driver.sleep(22000)
    await driver.wait(until.elementLocated(By.css("table[data-test-id='source-picker-platform-image-table']")));
    await driver.findElement(By.css("tr[class='oui-table-row-default'] td[class='oui-table-shrink'] input")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("div[data-test-id='source-picker-panel'] div[class='oui-savant__Panel--Footer'] button[class='oui-button oui-button-primary']")).click();
    await driver.findElement(By.css("button[data-test-id='change-shape-button']")).click();
    alert("")
    driver.sleep(10000);
    await driver.findElement(By.xpath("//div[@class='create-instance-dialog__shape-picker']/div[3]/div[1]/div[3]/div/div[2]/label")).click();
    driver.sleep(10000);
    await driver.findElement(By.xpath("//div[@class='create-instance-dialog__shape-picker']/section/div/div/table/tbody/tr[1]/td[1]/input")).click();
    driver.sleep(10000);
    await driver.findElement(By.css("input[data-test-id='flex-input-VM,Standard,A1,Flexcores-test-id']")).sendKeys("6");
    await driver.findElement(By.css("input[data-test-id='flex-input-VM,Standard,A1,Flexmemory-test-id']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css("input[data-test-id='flex-input-VM,Standard,A1,Flexmemory-test-id']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css("input[data-test-id='flex-input-VM,Standard,A1,Flexmemory-test-id']")).sendKeys("16");
    await driver.findElement(By.css("button[data-test-id='select-shape-button']")).click();
    alert("")
  }, 38000)

} 



example();