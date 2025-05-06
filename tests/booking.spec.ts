import { test, expect } from '@playwright/test';
import {Destination,Reserve} from '../pageObjects/bookingPage.json';

test('Navigate to Booking page', async ({ page }) => {
  //Navigate to Booking page
    await page.goto('/index.php');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('BlazeDemo');
  //choose  Departure ciity
  await page.locator(Destination.departure_city).selectOption('Paris');
  await page.locator(Destination.destination_city).selectOption('Rome');
  await page.locator(Destination.findFlight_btn).click();

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

});


