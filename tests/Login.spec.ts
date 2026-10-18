import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import process from "process";
import { LoginTestData } from "../test-data/LoginData";

test("Navigation to URL", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  console.log("Navigated to URL successfully");
});

// test("To Check valid login", async ({ page }) => {
//   let loginPage = new LoginPage(page);

//   await loginPage.navigateToUrl();

//   console.log("URL:", page.url());
//   console.log(
//     "Username count:",
//     await page.locator("input[name='username']").count(),
//   );
//   console.log(
//     "Password count:",
//     await page.locator("input[name='password']").count(),
//   );

//   await loginPage.EnterUsername(process.env.TEST_USERNAME!);
//   await loginPage.EnterPassword(process.env.TEST_PASSWORD!);

//   await loginPage.Login();
//   await loginPage.loggedIn("Dashboard");
// });

test("To Check InValid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.EnterUsername(LoginTestData.invalidusername);
  await loginPage.EnterPassword(LoginTestData.invalidpassword);
  await loginPage.Login();
  await loginPage.ToCheckErrorMessage(LoginTestData.RequiredValidationMessage);
});

test("To check validation message is diplayed for Username field when left blank", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.EnterUsername(LoginTestData.emptyusername);
  await loginPage.EnterPassword(process.env.TEST_PASSWORD!);
  await loginPage.Login();
  await loginPage.usernamefieldrequires(
    LoginTestData.UserNameFieldRequiredMessage,
  );
});

test("To check validation message is diplayed for Password field when left blank", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.EnterUsername(process.env.TEST_USERNAME!);
  await loginPage.EnterPassword(LoginTestData.emptypassword);
  await loginPage.Login();
  await loginPage.passwordfieldrequires(
    LoginTestData.PasswordFieldRequiredMessage,
  );
});

test("To Check valid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  //await page.waitForURL();
  await loginPage.EnterUsername(process.env.TEST_USERNAME!);
  await loginPage.EnterPassword(process.env.TEST_PASSWORD!);
  await loginPage.Login();
  await loginPage.loggedIn("Dashboard");
});
