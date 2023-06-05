import { test, expect } from '@playwright/test';


test('login as valid user and add address',async ({ page }) => {
  await page.goto('/index.php?route=account/login')

const user={
  
  EMAIL :'Jamestest@yahoo.com',
  PASSWORD : 'Father70',
}
   
await page.getByPlaceholder("E-Mail Address").fill(user.EMAIL)
await page.getByPlaceholder("Password").fill(user.PASSWORD)
await page.locator("input[type='submit']").click();

//await page.locator("//a[contains(text(),' Modify your address book entries')]").click()
await expect (page.getByText('Edit your account information')).toBeVisible()
await page.getByText('Modify your address book entries').click()
await page.locator('.float-right a').click()
await expect(page.getByText('Shop by Category')).toBeVisible();
//await  page.locator("//a[@class='btn btn-primary']").click()

// // Expects the URL to contain intro.
await expect(page).toHaveURL(/.*add/);


});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);


});
