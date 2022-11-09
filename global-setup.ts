import { chromium } from "@playwright/test";

// Log the user in and store their token for reuse in all tests.
export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5173");
  page.getByRole("button", { name: "Log in" }).click();
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}
