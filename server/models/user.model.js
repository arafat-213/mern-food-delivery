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
		type: mongoose.Schema.Types.ObjectId
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
	const token = jwt.sign({ user }, process.env.JWT_SECRET)
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
