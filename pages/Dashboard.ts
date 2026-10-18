import { Locator, Page, expect } from "@playwright/test";

export class Dashboard {
  readonly page: Page;
  readonly transportOverview: Locator;
  //readonly transportsection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.transportOverview = page.getByRole("button", {
      name: "Transport Overview",
    });
    //this.transportsection = page.getByText("Transport Overview");
  }

  async transportoption(transportsection: string): Promise<void> {
    //await expect(this.transportOverview.hover).toHaveText(transportsection);
    await expect(
      this.transportOverview
        .getByRole("button", {
          name: "Transport Overview",
        })
        .hover(),  
    ).tohe

  }
}
