import { test, Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly dashboard: Locator;
  readonly usernamefield: Locator;
  readonly passwordfield: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("input[name='login']");
    this.errorMessage = page.locator(".alert-danger");
    this.rememberMeCheckbox = page.locator("#rememberMe");
    this.dashboard = page.getByTitle("Dashboard");
    //this.usernamefield = page.getByText("Username is required.");
    this.usernamefield = page.locator("#err-username");
    // //this.usernamefield = page.getByRole("alert", {
    //   name: "Username is required.",
    // });
    this.passwordfield = page.locator("#err-password");
  }

  async navigateToUrl(): Promise<void> {
    await this.page.goto(
      "https://gateway.ampersandgroup.in/realms/ampersand-internal/protocol/openid-connect/auth?client_id=hubbleorion-transport&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Ftransport-hubbleorion.hubblehox.com%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=rrTlQNz5YrNIJnUqUIP3rXH7bXPIRPHRLWrm4YyMKkE&code_challenge=Koq7ALGrEl1m4feGfW3QRPq4IFkq2nnaAtLOcLRCNsY&code_challenge_method=S256",
    );
  }

  async EnterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async EnterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickOnLoginButton(): Promise<void> {
    await this.loginButton.click();
    //await expect(this.dashboard).toContainText(DashboardTitle);
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
