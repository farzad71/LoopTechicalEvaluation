import {test} from "../Fixture/page.fixture"

test.describe('Web Application Page Validation Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

  });

  test('Verify "Implement user authentication" is in the "To Do" column @regression', async ({webApplicationPage}) => {
    await webApplicationPage.ClickOnWebApplication();
    await webApplicationPage.AssertImplementUserAuthentication();
    await webApplicationPage.AssertImplementUserAuthenticationHighPriority();
    await webApplicationPage.AsserttImplementUserAuthenticationFeature();
  });

  test('Verify "Fix navigation bug" is in the "To Do" column @regression', async ({webApplicationPage}) => {
    await webApplicationPage.ClickOnWebApplication();
    await webApplicationPage.AssertFixNavigationBug();
    await webApplicationPage.AssertToDoBug();
    
  });

  test('Verify "Design system updates" is in the "In Progress" column. @regression', async ({webApplicationPage}) => {
    await webApplicationPage.ClickOnWebApplication();
    await webApplicationPage.AssertDesignSystemUpdates();
    await webApplicationPage.AssertInProgressDesign();
    
  });

  
  
});
