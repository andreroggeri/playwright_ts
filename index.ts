import { chromium } from 'playwright';

export async function createBrowser() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({});
    return { page: await context.newPage(), browser };
}

createBrowser();