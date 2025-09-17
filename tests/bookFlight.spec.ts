import { test, expect } from '@playwright/test';
import {Destination, Reserve,Purchase,Confirmation} from '../locators/bookingFlight.json';
import { CheckoutDestination } from '../pages/bookingFlight';

test.describe('Story1: User book a flight', () => {
test ('Scenario1: Select City and Destination', async ({ page }) => {
    await page.goto('/index.php');
    //select Destination and City
    const MyBooking = new CheckoutDestination(page);
    await MyBooking.chooseDepartureDestinationCity();
    //Verify URL is change to reserve
    await expect(page).toHaveURL('https://blazedemo.com/reserve.php');
    //Verify page display a list of corresponding flight
    await expect(page.locator(Reserve.heading)).toContainText(['Paris to Rome']);
})
test ('Scenario2:Choose The flight and verify detail data is correct',async ({page}) => {
    await page.goto('/index.php'); 
    const MyBooking = new CheckoutDestination(page);
     await MyBooking.chooseDepartureDestinationCity();
     await MyBooking.chooseFlight();
     //CHECK RESULT 
     await expect(page).toHaveURL('https://blazedemo.com/purchase.php');
     await expect(page.locator(Purchase.flightNumber)).toContainText('Flight Number: UA954');
})
test ('Scenario3: Input personal information for booking', async({page}) =>{
    await page.goto('/index.php');
    const MyBooking = new CheckoutDestination(page);
    await MyBooking.chooseDepartureDestinationCity();
    await MyBooking.chooseFlight();
    await MyBooking.InputCustomerData();
    //CHECK RESULT 
    await expect(page).toHaveURL('https://blazedemo.com/confirmation.php');
})
test ('Scenario4: Verify Confirmation page', async ({page}) =>{
    await page.goto('/index.php');
    const MyBooking = new CheckoutDestination(page);
    await MyBooking.chooseDepartureDestinationCity();
    await MyBooking.chooseFlight();
    await MyBooking.InputCustomerData();
    //CHECK RESULT
    await expect(page.locator(Confirmation.thankYou_text)).toContainText('Thank you for your purchase today!');

})
})