const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { changesTracker } = require("./index.js") 

const itemSchema = new Schema({
	name: String,
	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	place: String,
	price: Number,
	from: String,
	interest: Number,
	amount: Number,
	date: String
});
itemSchema.plugin(changesTracker)
module.exports = mongoose.model("Item", itemSchema);