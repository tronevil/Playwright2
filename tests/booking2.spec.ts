import { test, expect } from '@playwright/test';
import {Destination,Reserve,Purchase,Confirmation} from '../pageObjects/bookingPage.json';
import { CheckoutDestination } from './main-flow';

const {BookingPage} = require ('../pageObjects/booking.page');

// test.describe("Find the flight by selecting city and country",  () => {
//   test.beforeEach(async ({page}) => {
//     const pom = new CheckoutDestination(page);
//     await pom.goto();
//   })
  test('Scenario1: Select City and Destination', async ({ page }) => {
    await page.goto('/index.php');
    //select Destination and City
    const MyBookingPage = new BookingPage(page);
    await MyBookingPage.chooseDepartureCity(Destination.departure_city_name);
    await MyBookingPage.chooseDestinationCity(Destination.destination_city_name);
    await MyBookingPage.selectFindFlight();
     //Verify URL is change to reserve
    await expect(page).toHaveURL('https://blazedemo.com/reserve.php');
    //Verify page display a list of corresponding flight
    await expect(page.locator(Reserve.heading)).toContainText(['Paris to Rome']);

    // //CHECK RESULT 
    // //Verify URL is change to reserve
    // await expect(page).toHaveURL('https://blazedemo.com/reserve.php');
    // //Verify page display a list of corresponding flight
    // await expect(page.locator(Reserve.heading)).toContainText(['Paris to Rome']);
    // //Verify data in the table 
    // const table = page.locator('.table');
    // const rows = table.locator('tbody tr');
    // const rowCount = await rows.count();
    // console.log(`Rows count: ${rowCount}`);
    // await expect(rowCount).toBeGreaterThan(4);

  }),
    test('Scenario2: Email Testing with Mailosaur.com', async ({ page }) => {
    const MailosaurClient = require("mailosaur");
    // Setup the API client


   const mailosaur = new MailosaurClient("D3fHmp9FfPTPgMjbLU7cNPAobup44IOc"); //api key

   const serverId = "mqse77la"; // server ID
   const email = await mailosaur.messages.get(serverId, 
    {
      sentTo: "enter-everybody@mqse77la.mailosaur.net",
    });

console.log(email.subject);

  })