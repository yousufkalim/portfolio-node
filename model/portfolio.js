const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	heading: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	cover: {
		type: String,
		required: true,
	},
	skills: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	copyright: {
		type: String,
		required: true,
	},
	weburl: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: Date,
		default: Date.now(),
	},
});

//Expor
module.exports = mongoose.model("portfolio", portfolioSchema);
