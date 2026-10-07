import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.spec";

test("Navigation to URL", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  console.log("Navigated to URL successfully");
});

test("To Check valid login", async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  //await page.waitForURL();
  await loginPage.EnterUsername(process.env.TEST_USERNAME!);
  await loginPage.EnterPassword(process.env.TEST_PASSWORD!);
  await loginPage.Login();
  await loginPage.loggedIn("Dashboard");
});

test("To Check InValid login", async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.EnterUsername("dhir.katarki@vgos.org");
  await loginPage.EnterPassword("Morning@2026");
  await loginPage.Login();
  await loginPage.ToCheckErrorMessage("Invalid username or password");
});

test("To check validation message is diplayed for Username field when left blank", async ({
  page,
}) => {
  let loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.EnterPassword(process.env.TEST_PASSWORD!);
  await loginPage.Login();
  await loginPage.usernamefieldrequires("⚠Username is required.");
});

test("To check validation message is diplayed for Password field when left blank", async ({
  page,
}) => {
  let loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.EnterUsername(process.env.TEST_USERNAME!);
  await loginPage.Login();
  await loginPage.passwordfieldrequires("⚠Password is required.");
});
