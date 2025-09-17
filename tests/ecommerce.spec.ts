import {test, expect} from '@playwright/test';
import {HomePage, ShopPage} from '../locators/ecommerce.json';
import {ECommerceWebsite} from '../pages/ecommerce';


test('Scenario1: Verify Home Page', async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/');
    //Verify RESULT
    await expect(page.locator(HomePage.newArrival_btn)).toBeVisible();
    await expect(page).toHaveTitle('Automation Practice Site');
}),

test('Scenario2: Verify Product Detail', async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/');
    const MyEcommerce = new ECommerceWebsite(page);
    await MyEcommerce.verifyShopPage();
    //Verify RESULT
    await expect(page.locator(ShopPage.sku1)).toContainText('Android Quick Start Guide');
})