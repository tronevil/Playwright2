import { test, expect } from '@playwright/test';

test('Visual test', async ({ page }) => {
  await page.goto('https://niteco.com/');
  //caputre full page
  await page.screenshot({path: '.\tests\visual.spec.ts-snapshots\niteco-fullpage.png', fullPage:true});
  await expect(page).toHaveScreenshot();
});