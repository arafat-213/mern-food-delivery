const { validationResult } = require('express-validator')
const Restaurant = require('../models/restaurant.model')

module.exports = {
	createRestaurant: async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty())
				return res.status(400).json({
					errors: errors.array().map(error => error.msg)[0]
				})
			const { name, address, phoneNumber, description, menu } = req.body
			let restaurant = await Restaurant.findOne({ name })
			if (restaurant)
				return res.status(400).json({
					error: 'A restaurant with this name already exists'
				})

			restaurant = await Restaurant.findOne({ owner: req.user._id })
			if (restaurant)
				return res.status(400).json({
					error: 'You already have a restaurant created'
				})

			restaurant = new Restaurant({
				owner: req.user._id,
				name,
				address,
				phoneNumber,
				description,
				menu
			})

			req.user.restaurant = restaurant._id

			await req.user.save()

			// user object is updated. so, frontend will need a new jwt token which has new user properties encrypted
			const token = req.user.generateAuthToken()

			await restaurant.save()
			return res.status(201).json({ restaurant, token })
		} catch (error) {
			console.error(error)
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
			console.error(error)
			return res
				.status(400)
				.json({ error: 'Unable to get restuarant list' })
		}
	},
	getRestaurant: async (req, res) => {
		try {
			let restaurant = await Restaurant.findOne({
				_id: req.params.restaurantId
			})
			await restaurant.populate('menu', '-__v').execPopulate()
			if (!restaurant)
				return res.status(404).json({
					error: 'No restaurant found'
				})
			return res.status(200).json({ restaurant })
		} catch (error) {
			if (error.name === 'CastError') {
				// Issue is with the parsed mongo ID, id is invalid
				return res.status(404).json({
					error: 'No restaurant found'
				})
			}
			console.error(error.message)
			return res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},
	addItemToMenu: async (req, res) => {
		try {
			// only restaurant owners can add items to the menu
			const restaurantOwner = req.user._id
			// Find the restaurant for logged in user
			const restaurant = await Restaurant.findOne({
				owner: restaurantOwner
			})
			if (!restaurant)
				return res.status(403).json({
					error: 'Forbidden. Access denied'
				})

			const { menu } = req.body
			restaurant.menu.unshift(menu)
			await restaurant.save()
			return res.status(201).json({
				restaurant
			})
		} catch (error) {
			console.error(error)
			return res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},
	deleteItemFromMenu: async (req, res) => {
		try {
			const restaurant = await Restaurant.findOne({
				owner: req.user._id
			})
			if (!Restaurant)
				return res.status(403).json({
					error: 'Forbidden! Access denied.'
				})

			// Filter out the menu item by passed param id
			restaurant.menu = restaurant.menu.filter(
				item => item._id.toString() !== req.params.itemId
			)

			// save the updated restaurant obj
			await restaurant.save()
			return res.status(200).json({ restaurant })
		} catch (error) {
			console.error(error)
			return res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},

	updateItemFromMenu: async (req, res) => {
		try {
			const restaurant = await Restaurant.findOne({
				owner: req.user._id
			})
			if (!restaurant)
				return res.status(403).json({
					error: 'Forbidden! Access denied.'
				})
			let indexOfFieldToBeUpdated = restaurant.menu.findIndex(
				item => item._id.toString() === req.params.itemId
			)
			if (indexOfFieldToBeUpdated === -1)
				return res.status(404).json({
					error: 'No item found. Please try again'
				})
			let { itemName, itemDescription, itemPrice, isAvailable } = req.body
			restaurant.menu[indexOfFieldToBeUpdated] = {
				itemName,
				itemDescription,
				itemPrice,
				isAvailable,
				_id: req.params.itemId
			}

			await restaurant.save()
			return res.status(200).json({ restaurant })
		} catch (error) {
			console.error(error)
			if (error.name === 'CastError')
				return res.status(404).json({ error: 'Menu item not found' })
			return res.status(500).json({ error: 'Internal Server Error' })
		}
	},
	updateRestaurant: () => {}
}
