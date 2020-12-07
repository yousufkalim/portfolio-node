const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	link: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	title: String,
	description: String,
	blog: String,
});

module.exports = mongoose.model("blogs", blogSchema);
