const express = require('express');
const router = express.Router();

/* GET event listing. */
router.get('/', function(req, res, next) {
  res.json([
  	{id: 1, title: "event 1", body: "This is the body for event 1"},
  	{id: 2, title: "event 2", body: "This is the body for event 2"},
  	{id: 3, title: "event 3", body: "This is the body for event 3"},
  	{id: 4, title: "event 4", body: "This is the body for event 4"}
  ])
});
module.exports = router;
