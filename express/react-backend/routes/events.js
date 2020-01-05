const express = require('express');
const router = express.Router();
const { EventsHandler } = require('../api/handlers/events');

/* GET event listing. */
router.get('/EventsDataList', function(req, res, next) {
  return new EventsHandler().EventsDataList(req, res);
});
module.exports = router;
