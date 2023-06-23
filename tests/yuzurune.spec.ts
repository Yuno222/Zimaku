import { test, expect } from '@playwright/test';

test('ゆずるね宣言する', async ({ page }) => {
  await page.goto('https://mineo.jp/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#default-header').getByRole('link', { name: 'マイページ' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('eoID').fill('yunosuke135');
  await page1.getByRole('button', { name: '次へ' }).click();
  await page1.getByPlaceholder('eoIDパスワード').fill('pikapika29');
  await page1.getByRole('button', { name: 'ログイン' }).click();
  // await page1.locator("#MineoSwitchSubmit").click();
  // await page1.getByRole('button', { name: '節約ON' }).click();
  //await page1.getByRole('button', { name: 'ゆずるね。宣言待ち' }).click();
});