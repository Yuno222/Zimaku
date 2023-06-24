import { test, expect } from '@playwright/test';

test.describe("ログイン済み",() => {
  test.use({storageState: "login_state.json"});
  
  test('ゆずるね宣言する', async ({ page }) => {
    await page.goto('https://my.mineo.jp');
    await page.locator("#MineoSwitchSubmit").click();
    // await page1.getByRole('button', { name: 'ゆずるね。宣言待ち' }).click();
  });
})