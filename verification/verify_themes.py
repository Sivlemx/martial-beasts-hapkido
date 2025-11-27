from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the index.html file
        page.goto(f"file://{os.getcwd()}/index.html")

        # Take a screenshot of the default dark theme
        page.screenshot(path="verification/screenshot_dark.png")
        print("Dark theme screenshot taken.")

        # Click the theme switcher button
        page.click("#theme-switcher")

        # Take a screenshot of the light theme
        page.screenshot(path="verification/screenshot_light.png")
        print("Light theme screenshot taken.")

        # Reload the page to test persistence
        page.reload()

        # Take a screenshot to verify persistence (should still be light)
        page.screenshot(path="verification/screenshot_persistence.png")
        print("Persistence screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run()
