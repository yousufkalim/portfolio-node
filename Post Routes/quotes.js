// Init
const router = require("express").Router();
const quotes = require("../model/quotes");

/*
===========
Routes
===========
*/

//Post
router.post("/quotes", (req, res) => {
	console.log(req.body.quote);
	let { quote, author } = req.body;

	quotes.create(
		{
			quote: quote,
			author: author,
		},
		(err, data) => {
			if (err) {
				res.status(500);
			} else {
				res.status(200).json(data);
			}
		}
	);
});

// Export
module.exports = router;
