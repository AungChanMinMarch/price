exports.addItem = (req, res)=>{
	const { name, place, price, from, date } = req.body;
	const newItem = new Item({
		name: name,
		owner: req.userId,
		place: place,
		price: price,
		from: from,
		date: date
	});
	newItem.save((err, docs)=>{
		if (err) {
            return res.status(500).json({ message: err });
        }
		res.json({ message: "item added successfully"});
	})
}

exports.getApp = (req, res)=>{
	Item.find({ owner: req.userId }, (err, docs)=>{
		res.json({
			message: "loaded app successfully",
			items: docs
		})
	})
}