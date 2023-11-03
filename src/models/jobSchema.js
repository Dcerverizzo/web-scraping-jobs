const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = require('../utils/config');

const jobSchema = new Schema({
  title: String,
  company: String,
  location: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
});

const JobModel = mongoose.model('Job', jobSchema);

module.exports = { JobModel };
