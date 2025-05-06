import { test, expect } from '@playwright/test';
import {Destination} from '../pageObjects/bookingPage.json';

test('Navigate to Booking page', async ({ page }) => {
  //Navigate to Booking page
    await page.goto('/index.php');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('BlazeDemo');
  //choose  Departure ciity
  await page.locator(Destination.departure_city).selectOption('Paris');
  await page.locator(Destination.destination_city).selectOption('Rome')
  await page.locator(Destination.findFlight_btn).click();
});


