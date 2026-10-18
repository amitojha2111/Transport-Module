import { test } from "@playwright/test";
import { BusManagement } from "../pages/Transport-BusManagement";
import { LoginPage } from "../pages/loginPage";
import process from "node:process";
import { LoginTestData } from "../test-data/LoginData";

test("To check user is redirect to Bus Management", async ({ page }) => {
  const loginpage = new LoginPage(page);
  const busmanagemet = new BusManagement(page);

  await loginpage.navigateToUrl();
  await loginpage.EnterUsername(process.env.TEST_USERNAME);
  await loginpage.EnterPassword(process.env.TEST_PASSWORD);
  await loginpage.Login();

  await busmanagemet.BusManagemRedirection();
  await busmanagemet.Search("KA53AB0036");
});

test("test bus creation", async ({ page }) => {
  const loginpage = new LoginPage(page);
  const busmanagemet = new BusManagement(page);

  await loginpage.navigateToUrl();
  await loginpage.EnterUsername(process.env.TEST_USERNAME);
  await loginpage.EnterPassword(process.env.TEST_PASSWORD);
  await loginpage.Login();
  await busmanagemet.BusManagemRedirection();
  await busmanagemet.AddNewBusbutton();
  await busmanagemet.FieldSelection("VIBGYOR Kids and High - Goregaon West");
  await busmanagemet.SelectBus(LoginTestData.Busnumber);
  await busmanagemet.EnterChasisNumber(LoginTestData.chahisnumber);
  await busmanagemet.GPSDevice("Neotrack");
});

test.only("get Table number", async ({ page }) => {
  const loginpage = new LoginPage(page);
  const busmanagemet = new BusManagement(page);
  await loginpage.navigateToUrl();
  await loginpage.EnterUsername(process.env.TEST_USERNAME);
  await loginpage.EnterPassword(process.env.TEST_PASSWORD);
  await loginpage.Login();
  await busmanagemet.BusManagemRedirection();
  await busmanagemet.datatable();
  await busmanagemet.datatablecolumncount();
});
