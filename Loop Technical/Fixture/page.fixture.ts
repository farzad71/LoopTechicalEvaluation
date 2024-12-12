import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { WebApplicationPage } from '../pages/webApplication.page';
import {MobileApplicationPage} from '../pages/mobileApplication.page'


type UIPages = {
  loginPage: LoginPage;
  webApplicationPage: WebApplicationPage;
  mobileApplicationPage: MobileApplicationPage;

};

export const test = base.extend<UIPages>({
  webApplicationPage: async ({ page }, use) => {
    const webApplicationPage = new WebApplicationPage(page);
    await use(webApplicationPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  mobileApplicationPage: async ({ page }, use) => {
    const mobileApplicationPage = new MobileApplicationPage(page);
    await use(mobileApplicationPage);
  }
});
