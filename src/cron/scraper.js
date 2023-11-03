const puppeteer = require('puppeteer');
const sites = require('../utils/sites');
const database = require('../utils/config');

class Scraper {
  async scrapeData(site) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto(site.url, { timeout: 600000 });

      const jobList = await page.$$(`${site.selectors.list}`);
      const jobData = [];

      for (const job of jobList) {
        const title = await job.$eval(`${site.selectors.title}`, (element) => element.textContent.trim());
        const company = await job.$eval(`${site.selectors.company}`, (element) => element.textContent.trim());
        const location = await job.$eval(`${site.selectors.location}`, (element) => element.textContent.trim());
        const link = await job.$eval(`${site.selectors.link}`, (element) => element.href);
        jobData.push({ title, company, location, link });
      }

      return jobData;
    } finally {
      await browser.close();
    }
  }

  async init() {
    try {
      await database.connect();
      await database.clearData();
      const scrapedData = await Promise.all(sites.map((site) => this.scrapeData(site)));
      await database.saveDataToMongoDB(scrapedData);
    } catch (error) {
      console.error('Erro no aplicativo:', error);
    } finally {
      console.log('Concluído!');
    }
  }
}

module.exports = Scraper;
