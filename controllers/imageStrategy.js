//Init
const multer = require("multer");

// Filter
function fileFilter(req, file, cb) {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(new Error("File types must be jpg or png"), false);
	}
}

// Blog Thumbnail Strategy
const blogThumbnail = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, "uploads/blog/thumbnails");
		},
		filename: function (req, file, cb) {
			cb(null, Date.now() + "-" + file.originalname);
		},
	}),
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

// Article Images Strategy
const articleImage = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, "uploads/blog/articles");
		},
		filename: function (req, file, cb) {
			cb(null, Date.now() + "-" + file.originalname);
		},
	}),
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

module.exports = { blogThumbnail, articleImage };
