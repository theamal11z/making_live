const puppeteer = require('puppeteer');

async function visitSite() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://its-rex.onrender.com', { waitUntil: 'networkidle0' }); // waits till page fully loads

  const title = await page.title();
  console.log('Page loaded with title:', title);

  await browser.close();
}

visitSite().catch(err => {
  console.error('Error visiting site:', err);
});
