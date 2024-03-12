import { expect, type Locator, type Page } from "@playwright/test";

export class LogInPage {
  readonly page: Page;
  readonly getUsernameTextbox: Locator;
  readonly getPasswordTextbox: Locator;
  readonly getLogInButton: Locator;
  readonly getLogInDialogButton: Locator;
  readonly getCloseButton: Locator;
  readonly getWelcomeUserButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUsernameTextbox = page.locator("id=loginusername");
    this.getPasswordTextbox = page.locator("id=loginpassword");
    this.getLogInButton = page.locator("id=login2");
    this.getLogInDialogButton = page.locator(
      "//*[@id='logInModal']/div/div/div[3]/button[2]"
    );
    this.getCloseButton = page.getByRole("button", { name: "Close" });
    this.getWelcomeUserButton = page.locator("id=nameofuser");
  }
}
