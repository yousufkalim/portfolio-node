const router = require("express").Router();
const quotes = require("../model/quotes");

/*
===========
Routes
===========
*/

//Get Route
router.get("/", (req, res) => {
	quotes.find((err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

//Post
router.post("/", (req, res) => {
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

module.exports = router;
