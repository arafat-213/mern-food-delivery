const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	address: {
		type: String,
		required: [true, 'Address is required']
	},
	restaurant: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'restaurant'
	},
	orderStatus: {
		type: String,
		enum: [
			'W', //Waiting for restaurant to confirm
			'A', // Accepted,
			'R', //'Rejected',
			'I', //'In the kitchen',
			'O', //'Out for delivery',
			'D' //'Delivered'
		],
		default: 'W'
	},
	orderContent: [
		{
			itemName: {
				type: String,
				required: [true, 'Item name is required']
			},
			itemPrice: {
				type: Number,
				required: [true, 'Item price is required']
			}
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = Order = mongoose.model('order', OrderSchema)
