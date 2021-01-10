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
	menu: {
		type: Array
	}
})

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema)
