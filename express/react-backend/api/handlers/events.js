const logger = require('../logger');

const EventsHandler = class EventsHandler {
  constructor() {
  	//BigQueryのKEYの情報をおく
  	/*
	  	this.bigqueryClient = new BigQuery({
	      projectId: '[プロジェクトID]',
	      keyFilename: '[サービスアカウントキーのパス]'
	    });
    */
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
  EventsDataList(req, res) {
  	console.log('call getEventsData');
  	/*
  	 APIで非同期処理を実装する。
  	*/
    const results = res.json([
	  	{id: 1, title: "event 1", body: "This is the body for event 1"},
	  	{id: 2, title: "event 2", body: "This is the body for event 2"},
	  	{id: 3, title: "event 3", body: "This is the body for event 3"},
	  	{id: 4, title: "event 4", body: "This is the body for event 4"}
  	])
  	logger.debug(results);
  	return results
  }
}
exports.EventsHandler = EventsHandler;