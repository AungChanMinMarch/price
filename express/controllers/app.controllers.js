const Item = require("../models/item.js")

exports.addItem = (req, res)=>{
	const newItem = new Item({
		...req.body,
		owner: req.userId
	});
	newItem.save((err, docs)=>{
		if (err) {
            return res.status(500).json({ message: err });
        }
		res.json({ message: "item added successfully"});
	})
}
exports.updateItem = async (req, res)=>{
	const { id } = req.params;
	const item = await Item.findById(id);

    for(let property in req.body) item[property] = req.body[property]
    item.save(function(err, docs){
		if (err) {
            return res.status(500).json({ message: err });
        }
		res.json({ message: "item updated successfully"});
	})
}
exports.getApp = (req, res)=>{
	Item.find({ owner: req.userId }, { _changes: 0, __v:0}, (err, docs)=>{
		res.json({
			message: "loaded app successfully",
			items: docs
		})
	})
}