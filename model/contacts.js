// Init
const mongoose = require("mongoose");

// Making Shema
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: String,
	phone: String,
	dateSubmit: {
		type: Date,
		default: Date.now(),
	},
});

// Export
module.exports = mongoose.model("Contacts", contactSchema);
