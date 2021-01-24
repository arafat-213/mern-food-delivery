const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
	restaurant: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'restaurant'
	},
	itemName: {
		type: String,
		required: true
	},
	itemPrice: {
		type: Number,
		required: true
	},
	itemDescription: {
		type: String
	},
	isAvailable: {
		type: Boolean,
		default: true
	},
	isVeg: {
		type: Boolean,
		default: true
	}
})

module.exports = MenuItem = mongoose.model('menuItem', menuItemSchema)
