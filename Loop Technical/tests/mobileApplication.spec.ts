import {test} from "../Fixture/page.fixture"

test.describe('Mobile Application Page Validation Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

  });

  test('Verify "Push notification system" is in the "To Do" column @regression', async ({mobileApplicationPage}) => {
    await mobileApplicationPage.ClickOnMobileApplication();
    await mobileApplicationPage.AssertMobileApplicationPage();
    await mobileApplicationPage.AsserttPushNotificationSystem();
    await mobileApplicationPage.AssertPushNotificationSystemFeature();
  });

  test('Verify "Offline mode" is in the "In Progress" column @regression', async ({mobileApplicationPage}) => {
    await mobileApplicationPage.ClickOnMobileApplication();
    await mobileApplicationPage.AssertMobileApplicationPage();
    await mobileApplicationPage.AssertOfflineMode();
    await mobileApplicationPage.AssertOfflineModeFeature();
    await mobileApplicationPage.AssertOfflineModeHighPriority();
    
  });

  test('Verify "App icon design" is in the "Done" column @regression', async ({mobileApplicationPage}) => {
    await mobileApplicationPage.ClickOnMobileApplication();
    await mobileApplicationPage.AssertMobileApplicationPage();
    await mobileApplicationPage.AssertAppIcon();
    await mobileApplicationPage.AssertAppIconDesign();
    
  });

  
  
});
