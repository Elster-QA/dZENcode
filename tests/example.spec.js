// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.ukr.net/');

  // Expect a title "to contain" a subs   tring.              
  await expect(page).toHaveTitle(/UKR.NET: Всі новини України, останні новини дня в Україні та Світі/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.ukr.net/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Головне' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Головні новини України та світу' })).toBeVisible();

  // Ввести текст в строку поиска
await page.fill('input[type="search"]', 'Go-Go-Go');


  // 4. Кликаем кнопку "Увійти"
  await page.getByRole('button', { name: 'Пошук' }).click();


await page.locator('.product', { hasText: 'Carrot' }).locator('button', { hasText: 'ADD TO CART' }).click();//Выбираем класс продкуты(.product) в нем есть название "морковь" в это элементе еть енопка (button) с названием "ADD TO CART"

});



