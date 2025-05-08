import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto('https://its-rex.onrender.com', { waitUntil: 'networkidle2' });
    const title = await page.title();

    await browser.close();

    res.status(200).json({ message: 'Page fully loaded', title });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load page' });
  }
}
