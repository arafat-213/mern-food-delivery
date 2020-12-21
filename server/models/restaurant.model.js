const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
	// TODO: Link owner with user model
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	address: {
		type: String,
		required: true
	}
})

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema)
