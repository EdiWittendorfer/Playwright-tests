import { test, expect } from "@playwright/test";
import { randomUsername } from "../helpers/randomCredentials";
import { randomPassword } from "../helpers/randomCredentials";
import { DemoblazeMainPage } from "../pageObjectModel/demoblazeMainPage";
import { SignUpPage } from "../pageObjectModel/signUpPage";
import { LogInPage } from "../pageObjectModel/logIn";

const username = randomUsername();
const password = randomPassword();

test("Sign up and log in", async ({ page }) => {
  const demoblazeMainPage = new DemoblazeMainPage(page);
  const signUp = new SignUpPage(page);
  const logIn = new LogInPage(page);

  await demoblazeMainPage.goto();
  await demoblazeMainPage.signIn();
  await signUp.getUsernameTextbox.fill(`user${username}`);
  await signUp.getPasswordTextbox.fill(`pass${password}`);
  await signUp.getSignUpButton.click();
  await demoblazeMainPage.logIn();
  await logIn.getUsernameTextbox.fill(`user${username}`);
  await logIn.getPasswordTextbox.fill(`pass${password}`);
  await logIn.getLogInDialogButton.click();
  const softExpect = expect.configure({ soft: true });
  await softExpect(logIn.getWelcomeUserButton).toHaveText(
    "Welcome " + `user${username}`
  );
});
