const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	name: String,
	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	visibility: {
		type: Boolean,
		default: false
	},
	place: String,
	price: String,
	from: String,
	date: Date
});

module.exports = mongoose.model("Item", itemSchema);