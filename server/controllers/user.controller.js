const User = require('../models/user.model')
const { validationResult } = require('express-validator')

module.exports = {
	createUser: async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty())
				return res
					.status(400)
					.json({ error: errors.array().map(error => error.msg)[0] })
			const {
				name,
				email,
				phoneNumber,
				password,
				userType,
				address
			} = req.body
			let user = await User.findOne({ email })
			// if user already exists
			if (user)
				return res.status(400).json({
					error: 'Email is already taken'
				})
			// User does not exist, create one
			user = new User({
				name,
				email,
				phoneNumber,
				password,
				userType,
				address
			})
			await user.save()
			const token = user.generateAuthToken()
			return res.status(201).json({ user, token })
		} catch (error) {
			console.error(error)
			return res.status(400).json({
				error: error.message
			})
		}
	},

	login: async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(400).json({
				errors: errors.array().map(error => error.msg)[0]
			})
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
				token,
				user
			})
		} catch (error) {
			console.error(error)
			return res.status(400).json({
				error: error.message
			})
		}
	}
}
