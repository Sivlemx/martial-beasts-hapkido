import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        html_file_path = os.path.abspath('index.html')

        await page.goto(f'file://{html_file_path}')

        # 1. Take a screenshot of the initial (dark) theme
        await page.screenshot(path='verification/dark-theme-js-refactor.png')

        # 2. Click the theme switcher button
        await page.click('#theme-switcher')

        # 3. Take a screenshot of the new (light) theme
        await page.screenshot(path='verification/light-theme-js-refactor.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())