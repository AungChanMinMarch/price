const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceMemorySchema = new Schema({
	name: String,
	owner:{
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
})
exports["PriceMemory"] = mongoose.model("PriceMemory", priceMemorySchema);

const scheduleMemorySchema = new Schema({
	name: String,
	owner:{
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
});
exports["ScheduleMemory"] = mongoose.model("ScheduleMemory", scheduleMemorySchema)