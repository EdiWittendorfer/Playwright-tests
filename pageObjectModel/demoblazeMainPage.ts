import { expect, type Locator, type Page } from "@playwright/test";

export class DemoblazeMainPage {
  readonly page: Page;
  readonly getHomeLink: Locator;
  readonly getContactLink: Locator;
  readonly getAboutUsLink: Locator;
  readonly getCartLink: Locator;
  readonly getLogInLink: Locator;
  readonly getSignUpLink: Locator;
  readonly getPhonesLink: Locator;
  readonly getLaptopsLink: Locator;
  readonly getMonitorsLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly getWelcomeLink: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getHomeLink = page.locator("a", { hasText: "Home" });
    this.getContactLink = page.locator("a", { hasText: "Contact" });
    this.getAboutUsLink = page.locator("a", { hasText: "About us" });
    this.getCartLink = page.locator("a", { hasText: "Cart" });
    this.getLogInLink = page.locator("a", { hasText: "Log in" });
    this.getSignUpLink = page.locator("a", { hasText: "Sign up" });
    this.getPhonesLink = page.locator("a", { hasText: "Phones" });
    this.getLaptopsLink = page.locator("a", { hasText: "Laptops" });
    this.getMonitorsLink = page.locator("a", { hasText: "Monitors" });
    this.getWelcomeLink = page.locator("a", { hasText: "Welcome" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async contact() {
    await this.goto();
    await this.getContactLink.click();
  }

  async aboutUs() {
    await this.goto();
    await this.getAboutUsLink.click();
  }

  async cart() {
    await this.goto();
    await this.getCartLink.click();
  }

  async logIn() {
    await this.goto();
    await this.getLogInLink.click();
  }

  async signIn() {
    await this.goto();
    await this.getSignUpLink.click();
  }
}
