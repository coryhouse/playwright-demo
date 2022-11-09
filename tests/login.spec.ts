import { test, expect } from "@playwright/test";

test("should use data from global setup", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173");

  // Should be logged in because it was set via global-setup.
  await expect(page.getByText("fake token")).toBeVisible();
});
