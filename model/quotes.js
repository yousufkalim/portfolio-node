//init
const mongoose = require("mongoose");

//Shcema
const quotesSchema = new mongoose.Schema({
	quote: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: Date,
		default: Date.now(),
	},
});

// Model Export
module.exports = mongoose.model("quotes", quotesSchema);
