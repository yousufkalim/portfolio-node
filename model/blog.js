const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
	},
	title: String,
	description: String,
	blog: String,
});

module.exports = mongoose.model("blogs", blogSchema);
