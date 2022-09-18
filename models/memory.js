const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema({
	name: String,
	memory: {
		type: Schema.Types.ObjectId,
		refPath: "memoryType",
		required: true
	},
	memoryType: {
	    type: String,
	    required: true,
	    enum: ['PriceMemory', 'ScheduleMemory']
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	users: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}]
});

module.exports = mongoose.model("Memory", memorySchema);