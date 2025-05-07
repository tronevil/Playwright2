import { test, expect } from '@playwright/test';
import {Destination,Reserve} from '../pageObjects/bookingPage.json';
import { CheckoutDestination } from './main-flow';

test.describe("Find the flight by selecting city and country",  () => {
  test.beforeEach(async ({page}) => {
    const pom = new CheckoutDestination(page);
    await pom.goto();
  })
  test('Scenario1: Select City and Destination', async ({ page }) => {
    //select Destination and City
    const pom = new CheckoutDestination(page);
    pom.chooseDepartureDestinationCity();

    //CHECK RESULT 
    //Verify URL is change to reserve
    await expect(page).toHaveURL('https://blazedemo.com/reserve.php');
    //Verify page display a list of corresponding flight
    await expect(page.locator(Reserve.heading)).toContainText(['Paris to Rome']);
    //Verify data in the table 
    const table = page.locator('.table');
    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`Rows count: ${rowCount}`);
    await expect(rowCount).toBeGreaterThan(4);

}),
  test('Scenario2:Choose The flight and verify detail data is correct',async ({page}) => {
    //select Destination and City
    const pom = new CheckoutDestination(page);
    pom.chooseDepartureDestinationCity();
    //select Choose The Flight button
    await page.locator(Reserve.chooseTheFlight_btn).click();
    //CHECK RESULT 
    await expect(page).toHaveURL('https://blazedemo.com/purchase.php');

  })
});


