import { test, expect } from '@playwright/test';
const emailID = faker.internet.email();
const passwordID = faker.internet.password();
import { faker } from '@faker-js/faker';

test('has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Your Store/);
});

test.only('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.locator("(//span[contains(text(),' Blog')])[2]").click();

  // // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*home/);

  // Click on cart icon
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
  await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[2]/a/div/span').click()

  const user = {
firstName: "Anthon",
lastName:"peters",
//email:"Anthony.peter@test.com",
telephone:"45634556",
password:"test123",
confirmPassword:"test123"

  }


  await page.locator('#input-firstname').fill(user.firstName);
  await page.locator('#input-lastname').fill(user.lastName);
  await page.locator('#input-email').fill(emailID);
  await page.locator('#input-telephone').fill(user.telephone);
  

  //using placeholder
  await page.locator('#input-password').fill(user.password)
  await page.getByPlaceholder('Password Confirm').fill(user.confirmPassword)
  await page.locator("label[for='input-newsletter-no']").click()


  //await page.locator('#input-agree').check();
 await  page.evaluate('document.getElementById("input-agree").checked=true,{ timeout: 10000 }')


  await page.locator("input[value='Continue']").click()

  await expect(page.getByText('Congratulations! Your new account has been successfully created!')).toBeVisible();

 
  
})
