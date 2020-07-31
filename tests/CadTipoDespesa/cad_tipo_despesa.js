// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver'); // Importando dependencias do Selenium

describe('index', function() {
  this.timeout(30000)
  
  let driver
  
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  async function cadastrar_tipo_despesa(){
    await driver.get("http://localhost/SaldoPositivo");
    await driver.findElement(By.id("email_logar")).click();
    await driver.findElement(By.id("email_logar")).sendKeys("jheymisonbao@live.com");
    await driver.findElement(By.id("senha_logar")).click();
    await driver.findElement(By.id("senha_logar")).sendKeys("Misson201369");
    await driver.findElement(By.css(".btn:nth-child(3)")).click();
    await driver.findElement(By.xpath("(//a[@id=\'navbarDropdownMenuLink\']/p)[3]")).click();
    await driver.findElement(By.name("cadastra_tipo_despesas")).click();
    await driver.findElement(By.id("tipo_despesa")).sendKeys("Futebol com os amigos");
    await driver.findElement(By.name("salvar")).click();
  }

  it('index', async function() {
    cadastrar_tipo_despesa(); //Aplicando a função
  });
 
})
