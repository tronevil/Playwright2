import { test, expect } from '@playwright/test';
import {Destination,Reserve,Purchase,Confirmation} from '../locators/bookingFlight.json';
import { CheckoutDestination } from '../pages/bookingFlight';
  
const {BookingPage} = require ('../locators/bookingFlight.json');

// test.describe("Find the flight by selecting city and country",  () => {
//   test.beforeEach(async ({page}) => {
//     const pom = new CheckoutDestination(page);
//     await pom.goto();
//   })
  test('Scenario1: Select City and Destination', async ({ page }) => {
    await page.goto('/index.php');
    //select Destination and City
    const MyBookingPage = new CheckoutDestination(page);
    //await MyBookingPage.chooseDepartureCity(Destination.departure_city);
    await MyBookingPage.chooseDepartureDestinationCity();
     //Verify URL is change to reserve
    await expect(page).toHaveURL('https://blazedemo.com/reserve.php');
    //Verify page display a list of corresponding flight
    await expect(page.locator(Reserve.heading)).toContainText(['Paris to Rome']);

  }),
    test('Scenario2: Email Testing with Mailosaur.com', async ({ page }) => {
    const MailosaurClient = require("mailosaur");
    // Setup the API client
   const mailosaur = new MailosaurClient("D3fHmp9FfPTPgMjbLU7cNPAobup44IOc"); //api key

   const serverId = "mqse77la"; // server ID
   const email = await mailosaur.messages.get(serverId, 
    {
      subject: "Monthly LMS Update",
    });

console.log(email.subject);

  })