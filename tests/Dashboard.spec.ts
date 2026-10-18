import { test, expect } from "@playwright/test";
import { Dashboard } from "../pages/Dashboard";

test("To check Dashboard transport overview button", async ({ page }) => {
  const dashboard = new Dashboard(page);
});
