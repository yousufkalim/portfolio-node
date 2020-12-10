//Init
const router = require("express").Router();
const portfolio = require("../model/portfolio");

/*
==============
Routes
==============
*/

//Get Request
router.get("/portfolio", (req, res) => {
	portfolio.find((err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

// Exports
module.exports = router;
