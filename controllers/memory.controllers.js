const Memory = require("../models/memory.js");
const MemoryTypes = require("../models/memoryTypes.js");

exports.addMemory = (req, res)=>{
	const { name, type } = req.body;
	const newMemoryTypes = new MemoryTypes[type]({
		name: name
	});
	newMemoryTypes.save((err, newMemoryTypesDocs)=>{
		const newMemory = new Memory({
			name: name,
			memory: newMemoryTypesDocs._id,
			memoryType: type,
			owner: req.userId
		});
		newMemory.save((err, memory)=>{
			if (err) {
	            return res.status(500).json({ message: err });
	        }
	        else{
	            console.log('memory creation success');
	            console.log(memory);
				res.json({ message: "memory creation success"})
	        }
		})
	})
}

exports.getMemories = (req, res)=>{
	Memory.find({}, (err, memories)=>{
		console.log(memories);
		res.json({
			message: "loaded memories successfully",
			memories: memories
		})
	})
}