const MenuItem = require('../models/menuItem.model')

module.exports = {
	createMenuItem: async (req, res) => {
		try {
			if (req.user.userType !== 'restaurant') {
				return res.status(403).json({
					error: 'Forbidden! Access denied.'
				})
			}
			const {
				itemName,
				itemPrice,
				itemDescription,
				isVeg,
				isAvailable
			} = req.body
			let menuItem = await MenuItem.findOne({
				itemName,
				restaurant: req.user.restaurant
			})

			if (menuItem)
				return res.status(400).json({
					error: 'This item already exists in your menu.'
				})

			menuItem = new MenuItem({
				itemName,
				itemPrice,
				itemDescription,
				isVeg,
				isAvailable,
				restaurant: req.user.restaurant
			})

			await menuItem.save()

			return res.status(201).json({ menuItem })
		} catch (error) {
			console.error(error)
			res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},
	updateMenuItem: async (req, res) => {},
	deleteMenuItem: async (req, res) => {}
}
