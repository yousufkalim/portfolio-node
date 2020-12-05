//Init
const router = require("express").Router();
const contacts = require("../model/contacts");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./upload/");
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

router.post("/", upload.single("image"), (req, res) => {
	console.log(req.file);
	res.send("ok");
});

// Contact Post
// router.post("/", (req, res) => {
// 	let { name, email, phone } = req.body.data;
// 	contacts.create(
// 		{
// 			name: name,
// 			email: email,
// 			phone: phone,
// 		},
// 		(err, data) => {
// 			if (err) {
// 				res.status(422).json({ error: "Inernal Server Error" });
// 			}
// 			res.status(200).json(data);
// 		}
// 	);
// });

// Export
module.exports = router;
