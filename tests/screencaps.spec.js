// ui-screenshots.spec.js
const { test } = require("@playwright/test");
const SCREEN_SIZES = require("./screen-sizes");
const BROWSERS = require("./browsers");
import fs from "fs";
import path from "path";

const URL = "http://localhost:3000";

const paths = [
  "/",
  "/travel",
  "/accommodations",
  "/accommodations?beekmanModal=true",
];


for (const { name, width, height } of SCREEN_SIZES) {
  for (const pathName of paths) {
    test.describe(`${name} - ${pathName}`, () => {
      for (const browserConfig of BROWSERS) {
        test(`${browserConfig.name} – ${name} - ${pathName}`, async ({
          playwright,
        }) => {
          const browser = await playwright[browserConfig.type].launch();
          const context = await browser.newContext({
            viewport: { width, height },
          });

          const page = await context.newPage();

          await page.goto(`${URL}${pathName}`, { waitUntil: "networkidle" });

          // Optional: wait for main content to exist
          await page.waitForSelector("main");

          // Scroll slowly to trigger all "whileInView" animations
          await page.evaluate(async () => {
            await new Promise((resolve) => {
              let totalScrolled = 0;
              const step = 150; // pixels per scroll
              const delay = 50; // ms between scrolls

              const scrollInterval = setInterval(() => {
                window.scrollBy(0, step);
                totalScrolled += step;

                if (totalScrolled >= document.body.scrollHeight) {
                  clearInterval(scrollInterval);
                  // Return to top after scrolling
                  window.scrollTo(0, 0);
                  resolve();
                }
              }, delay);
            });
          });

          // Optional: wait a little extra to ensure animations finish
          await page.waitForTimeout(500);

          await page.screenshot({
            path: `screenshots/${pathName === "/" ? "root" : pathName}/${name.split("-")[0]}/${name.split("-")[1]}/${width}x${height}-${browserConfig.name}.png`,
            fullPage: true,
            animations: "disabled",
          });

          await browser.close();
        });
      }
    });
  }
}
