const logger = require('../logger');
const {BigQuery} = require('@google-cloud/bigquery');

const StockPriceHandler = class StockPriceHandler {
  constructor() {
	this.bigqueryClient = new BigQuery({
	  projectId: '',
	  keyFilename: ''
	});
  }
  selectBigQuery(query) {
	return new Promise((resolve, reject) => {
	  const options = {
		query,
		// Location must match that of the dataset(s) referenced in the query.
		// location:'US',
	  };
	  this.bigqueryClient.query(options, (err, rows) => {
	  if (err) {
		return reject(err);
	  }
	  return resolve(rows);
	  });
	});
  }
  /**
   * 日経平均株価を取得する
   * @param {*} req 
   * @param {*} res 
   */
  searchNikkeiStockAverage(req, res) {
	const query = `SELECT
	    date,
	    year,
	    month,
	    day,
        unixtime_jst,
	    opening_price,
	    high_price,
	    low_price,
        end_price
	  FROM
		stock_app.stock_sample`;
	const options = {
	  query,
	  // Location must match that of the dataset(s) referenced in the query.
	  // location:'US',
	};
	const results = this.selectBigQuery(query).then((result) => {
	  console.log(result);
	  return res.json(result)
	}).catch((err) => {
		console.log(err);
		res.status(400).send(err.message);
	}).finally(() => {

	});
  	return results
  }
}
exports.StockPriceHandler = StockPriceHandler;