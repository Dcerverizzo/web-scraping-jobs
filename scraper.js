const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://weworkremotely.com/categories/remote-front-end-programming-jobs';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const jobList = await page.$$('li.feature');

  const jobData = [];

  for (const job of jobList) {
    const title = await job.$eval('span.title', (element) => element.textContent.trim());
    const company = await job.$eval('span.company', (element) => element.textContent.trim());
    const location = await job.$eval('span.region', (element) => element.textContent.trim());
    const link = await job.$eval('a', (element) => element.href);
    jobData.push({ title, company, location, link });
  }

  console.log(jobData);

  await browser.close();
})();
