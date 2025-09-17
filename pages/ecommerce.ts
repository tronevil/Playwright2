import {test, expect,Page, devices} from '@playwright/test';
import  {HomePage, ShopPage} from '../locators/ecommerce.json';
export class ECommerceWebsite {
    constructor(private readonly page:Page) { }
    async goto() {
    await this.page.goto('https://demo.prestashop.com/#/en/front');
    }


async verifyShopPage(){
    //select Shop from Menu
    await this.page.locator(ShopPage.shop_menu).click();
}
}


