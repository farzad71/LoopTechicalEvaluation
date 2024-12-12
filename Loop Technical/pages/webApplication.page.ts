import { expect, type Locator, type Page } from '@playwright/test';


export class WebApplicationPage {
  private page: Page;
  private getButtonWebApplication: Locator;
  private getImplementUserAuthentication: Locator;
  private getImplementUserAuthenticationFeature: Locator;
  private getImplementUserAuthenticationHighPriority: Locator;
  private getFixNavigationBug: Locator;
  private getToDoBug: Locator;
  private getDesignSystemUpdates: Locator;
  private getInProgressDesign: Locator;
 
  

  constructor(page: Page) {
    this.page = page;
    this.getButtonWebApplication = page.locator("//button//h2[contains(text(),'Web Application')]")
    this.getImplementUserAuthentication = page.locator(
      "//*[contains(text(),'To Do')]//following::div//h3[contains(text(),'Implement user authentication')]"
    );
    this.getImplementUserAuthenticationFeature = page.locator(
      "(//*[contains(text(),'To Do')]//following::div//div//span[contains(text(),'Feature')])[1]"
    );
    this.getImplementUserAuthenticationHighPriority = page.locator("(//*[contains(text(),'To Do')]//following::div//div//span[contains(text(),'High Priority')])[1]");
    this.getFixNavigationBug = page.locator("//*[contains(text(),'To Do')]//following::div//h3[contains(text(),'Fix navigation bug')]");
    this.getToDoBug = page.locator("//*[contains(text(),'To Do')]//following::div//div//div//span[contains(text(),'Bug')]");
    this.getDesignSystemUpdates = page.locator(
      "//*[contains(text(),'In Progress')]//following::div//h3[contains(text(),'Design system updates')]"
    );
    this.getInProgressDesign = page.locator("//*[contains(text(),'In Progress')]//following::div//div//div//span[contains(text(),'Design')]")
  }

  
  async ClickOnWebApplication(){
    await this.getButtonWebApplication.click();
  }
  //#################----All the Assert Functions----####################################
  async AssertImplementUserAuthentication() {
    await this.getImplementUserAuthentication.isVisible();
    
  }

  async AsserttImplementUserAuthenticationFeature() {
    await this.getImplementUserAuthenticationFeature.isVisible();
  }
  
  async AssertImplementUserAuthenticationHighPriority() {
    await this.getImplementUserAuthenticationHighPriority.isVisible();
  }
  

  async AssertFixNavigationBug() {
    await this.getFixNavigationBug.isVisible();
  }

  async AssertToDoBug() {
    await this.getToDoBug.isVisible();
  }

  async AssertDesignSystemUpdates() {
    await this.getDesignSystemUpdates.isVisible();
  }

  async AssertInProgressDesign() {
    await this.getInProgressDesign.isVisible();
  }
  
}
