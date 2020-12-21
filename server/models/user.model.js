const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	// TODO: Add validations
	userType: {
		type: String,
		enum: ['customer', 'admin', 'restaurant'],
		default: 'customer'
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})
