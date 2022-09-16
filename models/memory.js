const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema({
	name: String,
	type: {
	    type: String,
	    required: true,
	    enum: ['price', 'todo']
	}
});

module.exports = mongoose.model("Memory", memorySchema);