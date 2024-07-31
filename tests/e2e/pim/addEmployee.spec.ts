import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
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
