const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleMemorySchema = new Schema({
	name: String
})

module.exports = mongoose.model("ScheduleMemory", scheduleMemorySchema)