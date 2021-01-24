const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
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
	}
})

//Adds a virtual property of orders created by current user when populate() is called
restaurantSchema.virtual('orders', {
	ref: 'order',
	localField: '_id',
	foreignField: 'restaurant'
})

//Adds a virtual property of menuItems created by current user when populate() is called
restaurantSchema.virtual('menu', {
	ref: 'menuItem',
	localField: '_id',
	foreignField: 'restaurant'
})

restaurantSchema.set('toObject', { virtuals: true })
restaurantSchema.set('toJSON', { virtuals: true })

module.exports = Restaurant = mongoose.model('restaurant', restaurantSchema)
