const Order = require('../models/order.model')

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
			if (!req.user.restaurant)
				return res.status(403).json({
					error: 'Forbidden. Access denied!'
				})
			const match = {}
			const sort = {}

			// if the request has query param completed = true, only rejected or delivered orders will be returned
			// if completed = false, orders in state W A I O will be returned
			if (req.query.completed) {
				match.orderStatus =
					req.query.completed === 'true'
						? { $in: ['R', 'D'] }
						: { $in: ['W', 'A', 'I', 'O'] }
			}

			// if the request query has sortBy value
			if (req.query.sortBy) {
				// sortBy will have string value of 2 params i.e
				// 1. Property of order by which sorting has to be done
				// 2. Order of sorting (asc or desc)
				const parts = req.query.sortBy.split(':')
				sort[parts[0]] = parts[1] === 'asc' ? 1 : -1
			}
			await req.user
				.populate({
					path: 'restaurant',
					populate: {
						path: 'orders',
						select: '-__v',
						match,
						options: {
							sort,
							limit: parseInt(req.query.limit),
							skip: parseInt(req.query.skip)
						},
						populate: {
							path: 'customer',
							select: '-userType -_id -__v'
						}
					}
				})
				.execPopulate()
			return res.status(200).json({
				orders: req.user.restaurant.orders
			})
		} catch (error) {
			console.error(error)
			res.status(500).json({
				error: 'Internal Server Error'
			})
		}
	},

	listOrdersForCustomer: async (req, res) => {
		try {
			await req.user
				.populate({
					path: 'orders',
					select: '-__v',
					options: {
						sort: {
							createdAt: -1
						}
					},
					populate: {
						path: 'restaurant',
						select: '-owner -__v -id -menu -description'
					}
				})
				.execPopulate()
			res.status(200).json({ orders: req.user.orders })
		} catch (error) {
			console.error(error)
			return res.status(500).json({
				error: 'Internal Server Error'
			})
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
