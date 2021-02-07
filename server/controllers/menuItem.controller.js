const MenuItem = require('../models/menuItem.model')

module.exports = {
	createMenuItem: async (req, res) => {
		try {
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
	getMenuItem: async (req, res) => {
		try {
			// Get a menu item by it's id
			const menuItem = await MenuItem.findOne({
				_id: req.params.menuItemId
			})
			if (!menuItem)
				return res.status(404).json({
					error: 'Item not found'
				})
			const {
				itemName,
				itemPrice,
				isVeg,
				_id,
				itemDescription
			} = menuItem

			return res.status(200).json({
				menuItem: {
					itemName,
					itemPrice,
					isVeg,
					_id,
					itemDescription
				}
			})
		} catch (error) {
			console.error(error)
			res.status(500).json({
				error: error.msg
			})
		}
	},
	// TODO: Update end point for menuItem
	updateMenuItem: async (req, res) => {},
	// TODO: Delete end point for menuItem
	deleteMenuItem: async (req, res) => {}
}
