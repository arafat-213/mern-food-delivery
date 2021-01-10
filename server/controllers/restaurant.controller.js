const { validationResult } = require('express-validator')
const Restaurant = require('../models/restaurant.model')

module.exports = {
	createRestaurant: async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty())
				return res
					.status(400)
					.json({ errors: errors.array().map(error => error.msg)[0] })

			const user = req.user
			if (user.userType === 'restaurant') {
				const {
					name,
					address,
					phoneNumber,
					description,
					menu
				} = req.body
				let restaurant = await Restaurant.findOne({ name })
				if (restaurant)
					return res.status(400).json({
						error: 'A restaurant with this name already exists'
					})
				restaurant = new Restaurant({
					owner: user._id,
					name,
					address,
					phoneNumber,
					description,
					menu
				})
				await restaurant.save()
				return res.status(201).json({ restaurant })
			} else
				return res.status(403).json({
					error:
						'You do not have sufficient rights to add a restaurant'
				})
		} catch (error) {
			console.log(error)
			res.staus(400).json({
				error: error.message
			})
		}
	},
	listRestaurants: async (req, res) => {
		try {
			let restaurants = await Restaurant.find()
			return res.status(200).json({ restaurants })
		} catch (error) {
			console.log(error)
			return res
				.status(400)
				.json({ error: 'Unable to get restuarant list' })
		}
	},
	getRestaurant: async (req, res) => {
		let restaurant = await Restaurant.findOne({ _id: req.id })
		if (!restaurant)
			return res.status(400).json({
				error: 'No restaurant found'
			})
		return res.status(200).json({ restaurant })
	},
	updateRestaurant: () => {}
}
