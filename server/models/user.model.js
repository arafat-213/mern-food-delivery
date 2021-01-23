const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
	userType: {
		type: String,
		enum: ['customer', 'admin', 'restaurant'],
		default: 'customer'
	},
	restaurant: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'restaurant'
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
	},
	address: {
		type: String,
		required: true
	}
})

//Adds a virtual property of orders created by current user when populate() is called
userSchema.virtual('orders', {
	ref: 'order',
	localField: '_id',
	foreignField: 'customer'
})

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email })
	if (!user) {
		throw new Error('Bad credentials')
	}
	const isMatch = bcrypt.compareSync(password, user.password)
	if (!isMatch) {
		throw new Error('Bad credentials')
	}
	return user
}

userSchema.methods.generateAuthToken = function () {
	const user = this
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
	return token
}
userSchema.pre('save', async function () {
	const user = this
	if (user.isModified('password'))
		user.password = bcrypt.hashSync(user.password, 8)
})

userSchema.methods.toJSON = function () {
	let user = this.toObject()
	delete user.password
	return user
}

module.exports = User = mongoose.model('user', userSchema)
