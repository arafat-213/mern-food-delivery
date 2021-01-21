const Order = require('../models/order.model')
const Restaurant = require('../models/restaurant.model')

module.exports = {
	createOrder: async (req, res) => {
		try {
			let totalAmount = 0
			const { restaurant, orderContent } = req.body
			orderContent.map(item => (totalAmount += item.itemPrice))
			let order = new Order({
				customer: req.user._id,
				restaurant,
				orderContent,
				totalAmount,
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
			let restaurant = await Restaurant.findOne({ owner: req.user._id })
			let orders = await Order.find({
				restaurant: restaurant._id
			})
				.populate('customer', '-_id -customerType -__v')
				.select('-restaurant -__v')
			res.status(200).json({ orders })
		} catch (error) {
			console.error(error)
			res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},

	listOrdersForCustomer: async (req, res) => {
		try {
			const orders = await Order.find({
				customer: req.user._id
			})
				.populate('restaurant', '-owner -menu -_id -__v')
				.select('-customer')
			res.status(200).json({ orders })
		} catch (error) {
			console.error(error)
		}
	},
	changeOrderStatus: async (req, res) => {
		try {
			const { newStatus } = req.body
			let restaurant = await Restaurant.findOne({
				owner: req.user._id
			})
			let order = await Order.findOne({
				restaurant: restaurant._id,
				_id: req.params.orderId
			})
			if (!order)
				return res.status(404).json({
					error: 'Order not found'
				})

			order.orderStatus = newStatus

			await order.save()

			return res.status(200).json({
				order
			})
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Internal Server Error' })
		}
	}
}