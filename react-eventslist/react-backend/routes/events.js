const express = require('express');
const router = express.Router();
const { StockPriceHandler } = require('../api/handlers/events');

/* GET event listing. */
router.get('/searchNikkeiStockAverage', function(req, res, next) {
  return new StockPriceHandler().searchNikkeiStockAverage(req, res)
});
module.exports = router;
