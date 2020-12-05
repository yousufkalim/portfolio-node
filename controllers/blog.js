const router = require("express").Router();
const blogs = require("../model/blog");
const multer = require("multer");

//Multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(new Error("File types must be jpg or png"), false);
	}
};

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

//Route
router.post("/", upload.single("image"), (req, res) => {
	let { title, description, blog } = req.body;
	blogs.create(
		{
			image: req.file.path,
			title: title,
			description: description,
			blog: blog,
		},
		(err, data) => {
			if (err) throw err;
			res.json(data);
		}
	);
});

//Export
module.exports = router;
