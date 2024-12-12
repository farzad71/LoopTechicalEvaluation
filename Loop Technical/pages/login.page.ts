import { expect, type Locator, type Page } from '@playwright/test';
import ENV from "../utils/ENV";

export class LoginPage {
 

  private page: Page;
  private getLoginButton: Locator;
  private getUserNameInput: Locator;
  private getPasswordInput: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getLoginButton = page.locator("//button[@type='submit']");
    this.getUserNameInput = page.locator("#username");
    this.getPasswordInput = page.locator("#password");
    
  }



  async EnterUserName() {
    await this.getUserNameInput.fill(ENV.ADMIN_USER_NAME);
  }

  async EnterPassword() {
    await this.getPasswordInput.fill(ENV.ADMIN_USER_PASSWORD);
  }

  async ClickOnLoginButton() {
    await this.getLoginButton.click();
  }
  
}