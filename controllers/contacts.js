//Init
const router = require("express").Router();
const contacts = require("../model/contacts");

// Contact Post
router.post("/", (req, res) => {
	let { name, email, phone } = req.body.data;
	contacts.create(
		{
			name: name,
			email: email,
			phone: phone,
		},
		(err, data) => {
			if (err) {
				res.status(422).json({ error: "Inernal Server Error" });
			}
			res.status(200).json(data);
		}
	);
});

// Export
module.exports = router;
