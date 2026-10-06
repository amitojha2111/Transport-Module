import { test, Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loggedInConfirmation: Locator;
  readonly usernamefield: Locator;
  readonly passwordfield: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("input[name='login']");
    this.errorMessage = page.locator(".alert-danger");
    this.rememberMeCheckbox = page.locator("#rememberMe");
    this.loggedInConfirmation = page
      .locator("h6")
      .filter({ hasText: "Dashboard" })
      .first();
    this.usernamefield = page.locator("#err-username");
    this.passwordfield = page.locator("#err-password");
  }

  async navigateToUrl(): Promise<void> {
    await this.page.goto(
      "https://preprod-transport-hubbleorion.hubblehox.com/",
    );
  }

  async EnterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async EnterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async Login(): Promise<void> {
    await this.loginButton.click();
  }

  async loggedIn(logginConfirmation: string): Promise<void> {
    //await this.page.waitForURL(/\/hubbleorion.hubblehox.com/);
    await expect(this.loggedInConfirmation).toHaveText(logginConfirmation);
  }

  async ToCheckErrorMessage(errorpopup: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(errorpopup);
  }

  async usernamefieldrequires(usernamevalidation: string): Promise<void> {
    await expect(this.usernamefield).toHaveText(usernamevalidation);
  }
  async passwordfieldrequires(passwordvalidation: string): Promise<void> {
    await expect(this.passwordfield).toHaveText(passwordvalidation);
  }
}
