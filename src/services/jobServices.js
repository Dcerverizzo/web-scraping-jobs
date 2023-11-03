const { JobModel } = require('../models/jobSchema');

const findAll = async (filter = {}) => {
  const results = await JobModel.find({ ...filter }).exec();
  return results;
};

const findOne = async (id) => {
  const result = await JobModel.findById(id);
  return result;
};

module.exports = { findOne, findAll }
