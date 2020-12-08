//Init
const router = require("express").Router();
const portfolio = require("../model/portfolio");

//Image Startegy
const imageStrategy = require("./imageStrategy");

//Routes
router.post(
	"/",
	imageStrategy.portfolio.fields([
		{ name: "thumbnail", maxCount: 1 },
		{ name: "cover", maxCount: 1 },
	]),
	(req, res) => {
		let {
			title,
			heading,
			skills,
			category,
			copyright,
			weburl,
			description,
		} = req.body;

		let link = "/portfolio/" + title.split(" ").join("-").toLowerCase();

		portfolio.create(
			{
				title: title,
				link: link,
				heading: heading,
				thumbnail: "/" + req.files.thumbnail[0].path,
				cover: "/" + req.files.cover[0].path,
				skills: skills,
				category: category,
				copyright: copyright,
				weburl: weburl,
				description: description,
			},
			(err, data) => {
				if (err) throw err;

				res.json(data);
			}
		);
	}
);

// Export
module.exports = router;
