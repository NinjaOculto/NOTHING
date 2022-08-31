
const { WebDriver } = require("selenium-webdriver");
const { until } = require("selenium-webdriver");
const { Button } = require("selenium-webdriver");
const { WebElement } = require("selenium-webdriver");
const {Builder, By, Key, util} = require("selenium-webdriver");
const { ableToSwitchToFrame } = require("selenium-webdriver/lib/until");
let driver;
const idBtn = "u_0_d_UB";
let name;
let email;
const password = "291607Ga*";
const chave = require("./key");
let placementAD = 1;
let shapeInstanceValue = 16;
let instanceAmount = 0;
let shapeSeriesOptPosition = 3;
let shapeInputOnedataId = 'flex-input-VM,Standard,A1,Flexcores-test-id';
let shapeInputTwodataId = 'flex-input-VM,Standard,A1,Flexmemory-test-id';

module.exports = function getDateForStartCreate(nome){
 name = nome;
 email = `${nome}@gmail.com`;
 startCreateInstance();
}

async function startCreateInstance(){
    driver = await new Builder().forBrowser("firefox").build(); 
    await driver.get("https://www.oracle.com/br/cloud/free/");
    await driver.wait(until.elementLocated(By.css("div[class='obttn1']>a")),240000);
    await driver.findElement(By.css("div[class='obttn1']>a")).click();
    setTimeout(async()=>{
    try {
      await driver.findElement(By.id("cloudAccountName")).sendKeys(name);
      await driver.findElement(By.id("cloudAccountButton")).click(); 
      await insertDateUse();
    } catch (error) {
      console.log("insira seus dados corretos");
    }
    }, 14000);
}

async function insertDateUse(){ 
  setTimeout(async()=>{
    const emailInput = By.id("idcs-signin-basic-signin-form-username");
    await driver.wait(until.elementLocated(emailInput), 240000);
    await driver.findElement(emailInput).sendKeys(email);
    await driver.findElement(By.id("idcs-signin-basic-signin-form-password|input")).sendKeys(password, Key.ENTER);
    driver.sleep(10000);
    selectInstance();
  }, 20000)
    
}

async function selectInstance(){
  setTimeout(async()=>{
    await driver.navigate().to("https://cloud.oracle.com/compute/instances");
   }, 28000);

  setTimeout(async()=>{
    driver.wait(until.elementLocated(By.id("sandbox-compute-container")), 240000);
    driver.sleep(10000);
    const iframe = await driver.findElement(By.id("sandbox-compute-container"));
    await driver.switchTo().frame(iframe);
    driver.sleep(28000);
    await driver.wait(until.elementLocated(By.className("radio-select")), 160000);
    await driver.findElement(By.className("radio-select")).click();
    await driver.wait(until.elementLocated(By.className('node')), 10000);
    await driver.findElement(By.className("node")).click("");
    await driver.wait(until.elementLocated(By.id("instance-list-table-primary-button")),140000);
    await driver.findElement(By.id("instance-list-table-primary-button")).click();
    await driver.sleep(20000);
    changeInstanceImg();
  }, 50000)
};

async function changeInstanceImg(){    
  setTimeout(async()=>{
  await driver.wait(until.elementLocated(By.className("oui-button-link")),240000);
  driver.wait(until.elementLocated(By.xpath("//fieldset[@data-test-id='image-shape-fieldset']/div[1]/div[2]/button")),140000);
  driver.findElement(By.xpath("//fieldset[@data-test-id='image-shape-fieldset']/div[1]/div[2]/button")).click();
  await driver.wait(until.elementLocated(By.css("button[data-test-id='change-image-button']")),140000);
  await driver.findElement(By.css("button[data-test-id='change-image-button']")).click();
  await driver.sleep(16000);
  await driver.wait(until.elementLocated(By.css("table[data-test-id='source-picker-platform-image-table']")),140000);
  await driver.findElement(By.css("tr[class='oui-table-row-default'] td[class='oui-table-shrink'] input")).click();
  await driver.sleep(10000);
  await driver.findElement(By.css("div[data-test-id='source-picker-panel'] div[class='oui-savant__Panel--Footer'] button[class='oui-button oui-button-primary']")).click();
  changeInstanceShape();
  }, 10000)
}

async function changeInstanceShape(){   
  setTimeout(async() => {
  await driver.wait(until.elementLocated(By.css("button[data-test-id='change-shape-button']")), 240000);
  await driver.findElement(By.css("button[data-test-id='change-shape-button']")).click();  
  driver.sleep(10000);
  await driver.findElement(By.xpath(`//div[@class='create-instance-dialog__shape-picker']/div[3]/div[1]/div[${shapeSeriesOptPosition}]/div/div[2]/label`)).click();
  driver.sleep(10000);
  await driver.findElement(By.xpath("//div[@class='create-instance-dialog__shape-picker']/section/div/div/table/tbody/tr[1]/td[1]/input")).click();
  driver.sleep(10000);
  await driver.findElement(By.css(`input[data-test-id="${shapeInputOnedataId}"]`)).sendKeys(Key.BACK_SPACE);
  await driver.findElement(By.css(`input[data-test-id="${shapeInputOnedataId}"]`)).sendKeys(Key.BACK_SPACE);
  await driver.findElement(By.css(`input[data-test-id="${shapeInputOnedataId}"]`)).sendKeys(shapeInstanceValue);
  await driver.findElement(By.css(`input[data-test-id="${shapeInputTwodataId}"]`)).sendKeys(Key.BACK_SPACE);
  await driver.findElement(By.css(`input[data-test-id="${shapeInputTwodataId}"]`)).sendKeys(Key.BACK_SPACE);
  await driver.findElement(By.css(`input[data-test-id="${shapeInputTwodataId}"]`)).sendKeys(shapeInstanceValue);
  driver.sleep(10000)
  await driver.wait(until.elementLocated(By.css("button[data-test-id='select-shape-button']")),240000);
  await driver.findElement(By.css("button[data-test-id='select-shape-button']")).click();
  changeInstanceAD();
  }, 10000);
}

async function changeInstanceAD(){
  setTimeout(async() => {
     await driver.findElement(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[1]/div[1]/div[2]/button")).click();
     await driver.wait(until.elementLocated(By.xpath(`//div[@class='fullscreen-two-thirds-width']/div/fieldset[1]/div[2]/div[1]/div[2]/div[1]/div[${placementAD}]`)),140000);
     await driver.findElement(By.xpath(`//div[@class='fullscreen-two-thirds-width']/div/fieldset[1]/div[2]/div[1]/div[2]/div[1]/div[${placementAD}]`)).click();
     networking(); 
  }, 8000);
}

async function networking(){
    setTimeout(async()=>{
    await driver.wait(until.elementLocated(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[3]/div[1]/div[2]/button")),140000);
    await driver.findElement(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[3]/div[1]/div[2]/button")).click();
    driver.sleep(12000);
    await driver.wait(until.elementLocated(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[3]/div[2]/div[1]/div[1]/div[1]/div[2]/input")),160000);
    driver.sleep(12000);
    await driver.findElement(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[3]/div[2]/div[1]/div[1]/div[1]/div[2]/input")).click();
    sendKey();
    }, 8000);
};

async function sendKey(){
  setTimeout(async()=>{
    await driver.wait(until.elementLocated(By.xpath("//div[@class='ssh-key-picker-wrapper']/div[1]/div[3]/input")), 140000);
    await driver.findElement(By.xpath("//div[@class='ssh-key-picker-wrapper']/div[1]/div[3]/input")).click();
    driver.sleep(10000);
    await driver.wait(until.elementLocated(By.xpath("//div[@class='ssh-key-picker-wrapper']/div[2]/div[1]/div[1]/div/div[1]/input")),140000);
    await driver.findElement(By.xpath("//div[@class='ssh-key-picker-wrapper']/div[2]/div[1]/div[1]/div/div[1]/input")).sendKeys(chave);
    driver.sleep(10000);
    createInstanceButton();
  },8000)
};

async function createInstanceButton(){
  setTimeout(async() => {
    await driver.findElement(By.css("div[class='oui-savant__Panel--Footer']>button")).click();
    try {
      await driver.wait(until.elementLocated(By.className("oui-savant__Panel--PanelMessageBlock__Critical")),20000);
      const instanceErrorAdd = await driver.findElement(By.className("oui-savant__Panel--PanelMessageBlock__Critical"));
      if(instanceErrorAdd){
         changePlacement();
      }

    } catch (error) {
      createNextInstance();
    }

    }, 8000);
};

async function changePlacement(){
  placementAD = placementAD + 1;
  if(placementAD>3){
    placementAD = 1;
  }
  await driver.findElement(By.xpath(`//div[@class='fullscreen-two-thirds-width']/div/fieldset[1]/div[2]/div[1]/div[2]/div[1]/div[${placementAD}]`)).click();
  setTimeout(async()=>{
    await driver.wait(until.elementLocated(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[3]/div[2]/div[1]/div[1]/div[1]/div[2]/input")),160000);
    driver.sleep(4000);
    await driver.findElement(By.xpath("//div[@class='fullscreen-two-thirds-width']/div/fieldset[3]/div[2]/div[1]/div[1]/div[1]/div[2]/input")).click();
    driver.sleep(4000);
    createInstanceButton();
    }, 10000);
}

async function previousGenerationImg(){
  setTimeout(async()=>{
    console.log("here");
  await driver.wait(until.elementLocated(By.className("oui-button-link")),240000);
  driver.wait(until.elementLocated(By.xpath("//fieldset[@data-test-id='image-shape-fieldset']/div[1]/div[2]/button")),140000);
  driver.findElement(By.xpath("//fieldset[@data-test-id='image-shape-fieldset']/div[1]/div[2]/button")).click();
  await driver.wait(until.elementLocated(By.css("button[data-test-id='change-image-button']")),140000);
  await driver.findElement(By.css("button[data-test-id='change-image-button']")).click();
  await driver.sleep(4000);
  await driver.wait(until.elementLocated(By.css("table[data-test-id='source-picker-platform-image-table']")),140000);
  await driver.findElement(By.css("tr[class='oui-table-row-default'] td[class='oui-table-shrink'] input")).click();
  await driver.sleep(4000);
  await driver.findElement(By.css("div[data-test-id='source-picker-panel'] div[class='oui-savant__Panel--Footer'] button[class='oui-button oui-button-primary']")).click();
  previousGenerationShape();
  }, 10000)
}

async function previousGenerationShape(){
  setTimeout(async() => {
    await driver.wait(until.elementLocated(By.css("button[data-test-id='change-shape-button']")), 240000);
    await driver.findElement(By.css("button[data-test-id='change-shape-button']")).click();  
    driver.sleep(4000);
    await driver.findElement(By.xpath(`//div[@class='create-instance-dialog__shape-picker']/div[3]/div[1]/div[4]/div/div/label`)).click();
    driver.sleep(4000);
    await driver.wait(until.elementLocated(By.xpath("//div[@class='create-instance-dialog__shape-picker']/section/div/div/table/tbody/tr[3]/td[1]/input")),80000);
    await driver.findElement(By.xpath("//div[@class='create-instance-dialog__shape-picker']/section/div/div/table/tbody/tr[3]/td[1]/input")).click();
    driver.sleep(6000);
    await driver.wait(until.elementLocated(By.xpath("//div[@class='create-instance-dialog__shape-picker']/section/div/div/table/tbody/tr[4]")),140000);
    await driver.findElement(By.css(`input[data-test-id="flex-input-VM,Standard,E3,Flexcores-test-id"]`)).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css(`input[data-test-id="flex-input-VM,Standard,E3,Flexcores-test-id"]`)).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css("input[data-test-id='flex-input-VM,Standard,E3,Flexcores-test-id']")).sendKeys(shapeInstanceValue);
    driver.sleep(6000);
    await driver.findElement(By.css(`input[data-test-id="flex-input-VM,Standard,E3,Flexmemory-test-id"]`)).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css(`input[data-test-id="flex-input-VM,Standard,E3,Flexmemory-test-id"]`)).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css(`input[data-test-id="flex-input-VM,Standard,E3,Flexmemory-test-id"]`)).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.css("input[data-test-id='flex-input-VM,Standard,E3,Flexmemory-test-id']")).sendKeys(shapeInstanceValue);
    driver.sleep(4000);
    await driver.wait(until.elementLocated(By.css("button[data-test-id='select-shape-button']")),240000);
    await driver.findElement(By.css("button[data-test-id='select-shape-button']")).click();
    changeInstanceAD();
  }, 8000);
}


async function createNextInstance(){
  setTimeout(async()=>{
  console.log("criandoInstance");
  instanceAmount = instanceAmount + 1;
  const IsAMDInstance = instanceAmount<4;   
  const isSixInstance = instanceAmount<6;
  shapeInstanceValue = 6; 
  shapeSeriesOptPosition = 1;
  shapeInputOnedataId = 'flex-input-VM,Standard,E4,Flexcores-test-id';
  shapeInputTwodataId = 'flex-input-VM,Standard,E4,Flexmemory-test-id';
   
  if(!isSixInstance){
    return console.log("instancias criadas");
  }

  if(IsAMDInstance){
    await driver.navigate().to("https://cloud.oracle.com/compute/instances/create");
    setTimeout(async() => {
     console.log("criando instancia AMD");
     driver.sleep(10000);
    driver.wait(until.elementLocated(By.id("sandbox-compute-container")), 240000)
    const iframe = await driver.findElement(By.id("sandbox-compute-container"));
    await driver.switchTo().frame(iframe);
    changeInstanceImg();
   }, 12000);
  }else{
    await driver.navigate().to("https://cloud.oracle.com/compute/instances/create");
    setTimeout(async() => {
      console.log("criando instnacia last serie");
      driver.sleep(10000);
      driver.wait(until.elementLocated(By.id("sandbox-compute-container")), 240000)
      const iframe = await driver.findElement(By.id("sandbox-compute-container"));
      await driver.switchTo().frame(iframe);
      previousGenerationImg();
    }, 8000); 
  }
  },12000); 
}

