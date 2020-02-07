const logger = require('../logger');

const EventsHandler = class EventsHandler {
  constructor() {
    
  }
  EventsDataList(req, res) {
  	console.log('call getEventsData');
    const results = res.json([
	  {id: 1, title: "event 1", body: 1},
	  {id: 2, title: "event 2", body: 2},
	  {id: 3, title: "event 3", body: 3},
	  {id: 4, title: "event 4", body: 4},
	  {id: 5, title: "event 5", body: 5},
	  {id: 6, title: "event 6", body: 6},
	  {id: 7, title: "event 7", body: 7},
	  {id: 8, title: "event 8", body: 8},
	  {id: 9, title: "event 9", body: 9}
  	])
  	logger.debug(results);
  	return results
  }
}
exports.EventsHandler = EventsHandler;