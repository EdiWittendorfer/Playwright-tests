import { expect, type Locator, type Page } from "@playwright/test";

export class SignUpPage {
  readonly page: Page;
  readonly getUsernameTextbox: Locator;
  readonly getPasswordTextbox: Locator;
  readonly getSignUpButton: Locator;
  readonly getCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUsernameTextbox = page.getByRole("textbox", { name: "Username" });
    this.getPasswordTextbox = page.getByRole("textbox", { name: "Password" });
    this.getSignUpButton = page.getByRole("button", { name: "Sign up" });
    this.getCloseButton = page.getByLabel("Log in").getByText("Close");
  }
}
