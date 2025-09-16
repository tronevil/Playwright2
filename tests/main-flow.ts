import { test, expect, Page } from '@playwright/test';
import {Destination,Reserve,Purchase} from '../pageObjects/bookingPage.json';
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
  async chooseFlight(){
    await this.page.locator(Reserve.chooseTheFlight_btn).click();
  }
  async InputCustomerData(){
    await this.page.locator(Purchase.name).fill('Tron Ho');
    await this.page.locator(Purchase.address).fill('364 Cong Hoa');
    await this.page.locator(Purchase.cardType).selectOption('Visa');
    await this.page.locator(Purchase.rememberMe).check();
    await this.page.locator(Purchase.purchaseFlight_btn).click();
  }


}