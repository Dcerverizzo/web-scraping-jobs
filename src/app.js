const app = require('express')();
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const scraper = require('./cron/scraper')
const cron = require('node-cron');

// cron.schedule('25 12 * * *', () => {
// });

scraper.init();
app.use(cors());
app.use('/', jobRoutes(app));

module.exports = app;
