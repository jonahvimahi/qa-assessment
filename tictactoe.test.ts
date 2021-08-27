import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.sleep(2000)
    
    let topLeft = await driver.findElement(By.id('cell-0'))
    await topLeft.click()

    await driver.sleep(2000)

    // let topMiddle = await driver.findElement(By.id("cell-1"))
    // await topMiddle

    let topRight = await driver.findElement(By.id("cell-2"))
    await topRight.click()

    await driver.sleep(2000)

    let bottomRight = await driver.findElement(By.id("cell-8"))
    await bottomRight.click()

    await driver.sleep(2000)
});