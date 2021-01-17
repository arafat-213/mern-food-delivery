const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	menu: [
		{
			itemName: {
				type: String,
				required: [true, 'Item name is required']
			},
			itemPrice: {
				type: Number,
				required: [true, 'Item price is required']
			},
			itemDescription: {
				type: String,
				required: [true, 'Item description is required']
			}
		}
	]
})

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema)
