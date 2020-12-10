// Init
const router = require("express").Router();
const blogs = require("../model/blogs");

/*
============
Routes
============
*/

//Get
router.get("/blog", (req, res) => {
	blogs.find((err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

//Export
module.exports = router;
