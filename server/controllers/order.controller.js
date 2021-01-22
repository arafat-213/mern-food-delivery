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
			console.error(error)
			return res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},

	listOrdersForRestaurant: async (req, res) => {
		try {
			let orders = await Order.find({
				restaurant: req.user.restaurant
			})
				.populate('customer', '-_id -customerType -__v')
				.select('-restaurant -__v')
				.sort('-createdAt')
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
				.sort('-createdAt')
			res.status(200).json({ orders })
		} catch (error) {
			console.error(error)
		}
	},
	changeOrderStatus: async (req, res) => {
		try {
			const { newStatus } = req.body
			let order = await Order.findOne({
				restaurant: req.user.restaurant,
				_id: req.params.orderId
			})
			if (!order)
				return res.status(404).json({
					error: 'Order not found'
				})

			switch (order.orderStatus) {
				case 'W':
					if (newStatus === 'A' || newStatus === 'R')
						order.orderStatus = newStatus
					else
						return res.status(400).json({
							error:
								'Order can only be either Accepted or Rejected from this state'
						})
					break
				case 'A':
					if (newStatus === 'I') order.orderStatus = newStatus
					else
						return res.status(400).json({
							error: `Order can only be moved to 'In the kitchen' state from here`
						})
					break
				case 'R':
					return res.status(400).json({
						error:
							'Orders once rejected can not be processed further.'
					})
				case 'I':
					if (newStatus === 'O') order.orderStatus = newStatus
					else
						return res.status(400).json({
							error: `Order can only be moved to state 'Out for delivery' from here`
						})
					break
				case 'O':
					if (newStatus === 'D') order.orderStatus = newStatus
					else
						return res.status(400).json({
							error: `Order can only be moved to state 'Delivered' from here`
						})
					break
				case 'D':
					return res.status(400).json({
						error:
							'Orders once delivered, can not be processed further.'
					})
			}

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
