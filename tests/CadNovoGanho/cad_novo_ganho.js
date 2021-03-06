// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver'); // Importando dependencias do Selenium

describe('index', function() {
  this.timeout(30000)
  
  let driver
  
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  async function cadastrar_novo_ganho(){
    await driver.get("http://localhost/SaldoPositivo");
    await driver.findElement(By.id("email_logar")).click();
    await driver.findElement(By.id("email_logar")).sendKeys("jheymisonbao@live.com");
    await driver.findElement(By.id("senha_logar")).click();
    await driver.findElement(By.id("senha_logar")).sendKeys("Misson201369");
    await driver.findElement(By.css(".btn:nth-child(3)")).click();
    await driver.get("http://localhost/SaldoPositivo/main.php?page=ganhos&sec=cadastrar_ganho");
    await driver.findElement(By.id("descricao_renda")).sendKeys("Teste Automatizado de Novo Ganho");
    await driver.findElement(By.css(".filter-option-inner-inner")).click();
    await driver.findElement(By.linkText("Décimo Terceiro")).click();
    await driver.findElement(By.id("valor_renda")).sendKeys("5,99");
    await driver.findElement(By.css(".btn-primary")).click();
  }

  it('index', async function() {
    cadastrar_novo_ganho(); //Aplicando a função
  });
 
})
