import { test, expect, Page } from '@playwright/test';
import {Destination,Reserve} from '../pageObjects/bookingPage.json';
export class CheckoutDestination {
    constructor(private readonly page: Page) { }
    async goto() {
    await this.page.goto('/index.php');
  }

  async chooseDepartureDestinationCity(){
    await this.page.locator(Destination.departure_city).selectOption('Paris');
    await this.page.locator(Destination.destination_city).selectOption('Rome');
    await this.page.locator(Destination.findFlight_btn).click();
  }


}