const express = require('express');
const jobServices = require('../services/jobServices');

module.exports = (app) => {
  const router = express.Router();

  router.param('id', async (req, res, next) => {
    await app.services.jobServices.findOne(req.params.id)
      .then((result) => {
        next();
      }).catch((error) => next(error));
  });

  router.get('/', async (req, res, next) => {
    await jobServices.findAll({})
      .then((result) => res.status(200).send( result )).catch((error) => next(error));
  });

  return router;
};
