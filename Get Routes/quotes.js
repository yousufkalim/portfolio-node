// Init
const router = require("express").Router();
const quotes = require("../model/quotes");

/*
=========
Routes
=========
*/

//Get Route
router.get("/quotes", (req, res) => {
	quotes.find((err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

// Export
module.exports = router;
