// Create Reuseable methods

import {Locator, Page,expect} from "@playwright/test";

export class BasePage {
    readonly page : Page;

    constructor (page:Page)
    {
this.page=page;
    }


async navigateURL (URL: string):Promise <void>
{
 await this.page.goto(URL)

}

async clickElement (locator:Locator) : Promise <void>
{
    await locator.click()

}

async enterElement (locator: Locator, value: string): Promise <void>
{
    await locator.fill(value)

}






}




// Trace to be introducd
//Allure report
// env file -- to run on different environments
