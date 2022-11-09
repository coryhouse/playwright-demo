import { test, expect } from "@playwright/test";

test("homepage has title and links to intro page", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173");

  // Should be logged in because the data from
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole("link", { name: "Get started" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
