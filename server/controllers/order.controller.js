const Order = require('../models/order.model')

module.exports = {
	createOrder: async (req, res) => {
		try {
			const { restaurant, orderContent } = req.body
			let order = new Order({
				customer: req.user._id,
				restaurant,
				orderContent,
				address: req.user.address
			})
			await order.save()
			res.status(201).json({ order })
		} catch (error) {
			console.log(error)
			return res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},

	listOrdersForRestaurant: async (req, res) => {
		try {
		} catch (error) {}
	}
}
