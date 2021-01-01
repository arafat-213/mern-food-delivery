const User = require('../models/user.model')
module.exports = {
	createUser: async (req, res) => {
		try {
			// TODO: Validate user inputs
			const { name, email, phoneNumber, password, userType } = req.body
			let user = User.findOne({ email })
			// if user already exists
			if (user)
				return res.status(400).json({
					error: 'Email is already taken'
				})
			// User does not exist, create one
			user = new User(name, email, phoneNumber, password, userType)
			await user.save()
			const token = user.generateAuthToken()
			return res.status(201).json({ user, token })
		} catch (error) {
			console.log(error)
			return res.status(400).json({
				error: error.message
			})
		}
	},

	login: async (req, res) => {
		// TODO: Validate user inputs
		try {
			const { email, password } = req.body
			const user = await User.findByCredentials(email, password)
			if (!user) {
				return res.status(401).send({
					error: 'Bad credentials'
				})
			}
			const token = user.generateAuthToken()
			return res.status(200).json({
				token
			})
		} catch (error) {
			console.log(error)
			return res.status(400).json({
				error: error.message
			})
		}
	}
}
