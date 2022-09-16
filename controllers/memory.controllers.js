const Memory = require("../models/memory.js");

exports.addMemory = (req, res)=>{
	console.log(req.body);
	const newMemory = new Memory(req.body);
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