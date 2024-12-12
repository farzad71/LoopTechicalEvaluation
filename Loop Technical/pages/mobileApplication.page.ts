import { expect, type Locator, type Page } from '@playwright/test';


export class MobileApplicationPage {
  private page: Page;
  private getButtonMobileApplication: Locator;
  private getMobileApplicationPage: Locator;
  private getOfflineMode: Locator;
  private getPushNotificationSystem: Locator;
  private getPushNotificationSystemFeature: Locator;
  private getOfflineModeFeature: Locator;
  private getOfflineModeHighPriority: Locator;
  private getAppIconDesign: Locator;
  private getAppIcon: Locator;
 
  

  constructor(page: Page) {
    this.page = page;
    this.getButtonMobileApplication = page.locator("//button//h2[contains(text(),'Mobile Application')]")
    this.getMobileApplicationPage = page.locator("//h1[contains(text(),'Mobile Application')]")
    this.getOfflineMode = page.locator(
      "//*[contains(text(),'In Progress')]//following::div//h3[contains(text(),'Offline mode')]"
    );
    this.getPushNotificationSystem = page.locator(
      "#root > div > div.flex-1.flex.flex-col.bg-gray-100 > main > div > div > div:nth-child(1) > h3"
    );
    this.getPushNotificationSystemFeature = page.locator("//*[contains(text(),'To Do')]//following::div//h3[contains(text(),'Push notification system')]//following::span[contains(text(),'Feature')]");
    this.getOfflineModeFeature = page.locator("//*[contains(text(),'In Progress')]//following::div//h3[contains(text(),'Offline mode')]/following::span[contains(text(),'Feature')]");
    this.getOfflineModeHighPriority = page.locator("//*[contains(text(),'In Progress')]//following::div//h3[contains(text(),'Offline mode')]/following::span[contains(text(),'High Priority')]");
    this.getAppIcon = page.locator("//*[contains(text(),'Done')]//following::div//h3[contains(text(),'App icon design')]");
    this.getAppIconDesign = page.locator(
      "//*[contains(text(),'Done')]//following::div//h3[contains(text(),'App icon design')]/following::span[contains(text(),'Design')]"
    );
    
  }

  
  async ClickOnMobileApplication(){
    await this.getButtonMobileApplication.click();
  }
  //#################----All the Assert Functions----####################################
  async AssertOfflineMode() {
    await this.getOfflineMode.isVisible();
    
  }

  async AsserttPushNotificationSystem() {
    await this.getPushNotificationSystem.isVisible();
  }
  
  async AssertPushNotificationSystemFeature() {
    await this.getPushNotificationSystemFeature.isVisible();
  }
  

  async AssertOfflineModeFeature() {
    await this.getOfflineModeFeature.isVisible();
  }

  async AssertOfflineModeHighPriority() {
    await this.getOfflineModeHighPriority.isVisible();
  }

  async AssertAppIcon() {
    await this.getAppIcon.isVisible();
  }

  async AssertAppIconDesign() {
    await this.getAppIconDesign.isVisible();
  }

  async AssertMobileApplicationPage(){
    await this.getMobileApplicationPage.isVisible()
  }
  
}
