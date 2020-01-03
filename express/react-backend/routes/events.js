const express = require('express');
const router = express.Router();
const { EventsHandler } = require('../api/handlers/events');

/* GET event listing. */
// APIの中身は外部に実装しここでreturnする
router.get('/', function(req, res, next) {
  return new EventsHandler().getEventsData(req, res);
});
module.exports = router;
