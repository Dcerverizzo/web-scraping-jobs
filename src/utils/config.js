const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', true);

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to database');
});

mongoose.connection.on('error', (err) => {
  console.error(`Database connection error: ${err}`);
  process.exit(1);
});

exports.connect = async () => {
  try {

    await mongoose.connect(MONGO_URI, {
      maxPoolSize: 50,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(`Database connection error: ${error}`);
    process.exit(1);
  }
};

exports.saveDataToMongoDB = async (data) => {
  try {
    const { JobModel } = require('../models/jobSchema');
    for (const item of data) {
      await JobModel.create(item).then(() => {
        console.log('Success save in database')
      });
    }
  } catch (error) {
    console.error('Erro ao salvar dados no MongoDB:', error);
  }
};

exports.clearData = async () => {
  const { JobModel } = require('../models/jobSchema');
  try {
    const result = await JobModel.deleteMany({});
    console.log(`database clear deleted ${result.deletedCount} items`);
  } catch (error) {
    console.error('Error clearing data from database:', error);
    process.exit(1);
  }
}

exports.disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('Successfully disconnected from database');
  } catch (error) {
    console.error('Error disconnecting from database');
    console.error(error);
    process.exit(1);
  }
};
