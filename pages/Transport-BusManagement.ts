import { expect, Locator, Page } from "@playwright/test";

export class BusManagement {
  readonly page: Page;
  readonly transportOverview: Locator;
  readonly AddNewBusButton: Locator;
  //Buttons in Add Bus screen
  readonly BusSubmitButton: Locator;
  readonly BusCancelButton: Locator;
  readonly BusSaveButton: Locator;
  //Field in Add Bus screen
  readonly BusManagement: Locator;
  readonly SelectSchoolOption: Locator;
  readonly selectSchool: Locator;
  readonly BusNumber: Locator;
  readonly ChasisNumber: Locator;
  readonly GpsDevicePlatform: Locator;
  // fields in Bus Management screen
  readonly SearchOption: Locator;

  readonly datagrid: Locator;
  readonly datarows: Locator;

  readonly rowsperpage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.transportOverview = page.getByRole("button", {
      name: "Transport Overview",
    });
    this.BusManagement = page.getByRole("link", { name: "Bus Management	 " });
    this.AddNewBusButton = page.getByRole("button", { name: "Add New Bus" });
    this.BusSubmitButton = page.getByRole("button", { name: "Submit" });
    this.BusCancelButton = page.getByRole("button", { name: "Cancel" });
    this.BusSaveButton = page.getByRole("button", { name: "Save" });
    this.SelectSchoolOption = page.getByRole("combobox", {
      name: "Select School",
    });
    this.selectSchool = page.locator(
      "//input[@aria-activedescendant = ':rnd:-option-1']",
    );
    this.BusNumber = page.locator("//input [@name ='bus_number' ]");
    this.ChasisNumber = page.locator("//input[@name = 'chassis_no'] ");
    this.GpsDevicePlatform = page.locator("#gps-device-platform");

    this.datagrid = page.getByRole("grid");
    this.datarows = page.getByRole("grid").locator(".MuiDataGrid-row");

    //
    this.rowsperpage = page.locator("//div[@aria-haspopup = 'listbox']").nth(1);

    this.SearchOption = page.getByPlaceholder(
      "Search for Bus Number, Bus Type & Bus Capacity",
    );
  }
  //Functions
  async BusManagemRedirection(): Promise<void> {
    await this.page.reload();
    await this.transportOverview.hover();
    await this.BusManagement.click();
    await expect(this.page).toHaveURL(
      "https://preprod-transport-hubbleorion.hubblehox.com/bus-listing/",
    );
  }

  async Search(SearchOption: string): Promise<void> {
    await this.SearchOption.click();
    await this.SearchOption.fill(SearchOption);
    console.log("Value entered in search box");
  }
  // Click on Add New Bus Button
  async AddNewBusbutton(): Promise<void> {
    await this.AddNewBusButton.click();
  }

  //School Selection
  async FieldSelection(SelectOption: string): Promise<void> {
    await this.SelectSchoolOption.fill(SelectOption);
    await this.page.getByRole("option", { name: SelectOption }).click();
  }

  //Enters Bus Number
  async SelectBus(BusNumber: string): Promise<void> {
    await this.BusNumber.fill(BusNumber);
  }

  // Enter Chasis Number
  async EnterChasisNumber(chasisnumber: string): Promise<void> {
    await this.ChasisNumber.fill(chasisnumber);
  }

  async GPSDevice(SelectGPS: string) {
    await this.GpsDevicePlatform.click();
    await this.page.getByRole("option", { name: SelectGPS }).click();
  }

  async GPSID(): Promise<void> {}

  async BusCapacity(): Promise<void> {}

  async BusType(): Promise<void> {}

  async WifiName(): Promise<void> {}

  async WifiIdentification(): Promise<void> {}

  async ManualCode(): Promise<void> {}

  // To check total columns and rows in data grid
  async datatablecolumncount(): Promise<void> {
    const rowscount = await this.datarows;
    const totalrowscount = await rowscount.count();
    console.log(totalrowscount);
    await expect(this.datarows).toHaveCount(10);
    await this.rowsperpage.click();
    await this.page.getByRole("option", { name: "25" }).click();
    const aftefiltercount = await rowscount.count();
    console.log(aftefiltercount);
    await expect(this.datarows).toHaveCount(25);
  }

  async datatable(): Promise<void> {
    const conunt = await this.datagrid.locator(".MuiDataGrid-columnHeader");
    const totalcount = await conunt.count();
    console.log(totalcount);
  }
}

export { expect };
