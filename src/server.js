const app = require('./app');

const PORT = process.env.PORT || 9000;

const database = require('./utils/config');

database.connect();

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));

