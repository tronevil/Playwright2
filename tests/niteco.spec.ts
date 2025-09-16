import { test, expect } from '@playwright/test';

test('Contact Us: Fill and submit the form', async ({ page }) => {
  await page.goto('https://niteco.com/contact-us/');

  // Input Full name
  await page.locator('input[name="fullname"]').fill('John Doe');

  // Input Email
  await page.locator('input[type="email"]').fill('john.doe@example.com');

  // Input Leave a Message
  await page.locator('textarea[name="message"]').fill('This is a test message.');

  // Check the checkbox "I would like to receive offers"
  await page.locator('input[type="checkbox"][name="offers"]').check();

  // Click the Submit button
  await page.locator('button[type="submit"], input[type="submit"]').click();

  // Optionally, add an assertion for a success message or navigation
  // await expect(page.locator('text=Thank you')).toBeVisible();
});