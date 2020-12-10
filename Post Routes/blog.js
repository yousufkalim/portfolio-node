const router = require("express").Router();
const blogs = require("../model/blogs");
const imageStrategy = require("../controllers/imageStrategy");

/*
===========
Routes
===========
*/

//Article Images Post
router.post(
	"/blog/article-image",
	imageStrategy.articleImage.single("upload"),
	(req, res) => {
		res.status(200).json({
			uploaded: true,
			url: `/${req.file.path}`,
		});
	}
);

//Article Post
router.post(
	"/blog",
	imageStrategy.blogThumbnail.single("image"),
	(req, res) => {
		let { title, description, blog } = req.body;

		let link = "/blog/" + title.split(" ").join("-").toLowerCase();

		blogs.create(
			{
				link: link,
				image: "/" + req.file.path,
				title: title,
				description: description,
				blog: blog,
			},
			(err, data) => {
				if (err) throw err;
				res.json(data);
			}
		);
	}
);

//Export
module.exports = router;
