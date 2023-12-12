import { test, expect } from "@playwright/test";

test("test create delete product list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("name");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(page.getByText("namedescription")).toBeVisible();
  await expect(page.getByRole("button", { name: "Удалить" })).toBeVisible();
  await expect(page.getByText("namedescription")).toBeVisible();
  await page.getByRole("button", { name: "Удалить" }).click();
});
