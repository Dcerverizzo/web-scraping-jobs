const app = require('./app');

const database = require('./utils/config');

database.connect();

app.listen(3001);
