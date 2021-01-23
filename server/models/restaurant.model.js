const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
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
			},
			isAvailable: {
				type: Boolean,
				default: true
			}
		}
	]
})

//Adds a virtual property of orders created by current user when populate() is called
restaurantSchema.virtual('orders', {
	ref: 'order',
	localField: '_id',
	foreignField: 'restaurant'
})

restaurantSchema.set('toObject', { virtuals: true })
restaurantSchema.set('toJSON', { virtuals: true })

module.exports = Restaurant = mongoose.model('restaurant', restaurantSchema)
