const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceMemorySchema = new Schema({
	name: String
})
exports["PriceMemory"] = mongoose.model("PriceMemory", priceMemorySchema);

const scheduleMemorySchema = new Schema({
	name: String
});
exports["ScheduleMemory"] = mongoose.model("ScheduleMemory", scheduleMemorySchema)