const app = require('express')();
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const Scraper = require('./cron/scraper')
const cron = require('node-cron');

new Scraper().init();
app.use(cors());
app.use('/', jobRoutes(app));

module.exports = app;
