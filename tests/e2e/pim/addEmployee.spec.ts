import { expect, test } from '@playwright/test';
import { Env } from '../../../config/env';

test('test', async ({ page }) => {
  await page.goto(Env.BASE_URL);
  await page.getByPlaceholder('Username').fill(Env.USERNAME);
  await page.getByPlaceholder('Password').fill(Env.PASSWORD);
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.locator('li').filter({ hasText: 'Add Employee' }).click();
  await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });
  await page.getByPlaceholder('First Name').fill('Steve');
  await page.getByPlaceholder('Middle Name').fill('Paul');
  await page.getByPlaceholder('Last Name').fill('Jobs');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });
  await page.waitForTimeout(1000);
  await expect(page.getByText('SuccessSuccessfully Saved×')).toBeVisible();
});
