const express = require('express')
const auth = require('../middleware/auth.middleware')
const {
	createOrder,
	listOrdersForRestaurant,
	listOrdersForCustomer,
	changeOrderStatus
} = require('../controllers/order.controller')
const router = express.Router()

/*
 * @route POST api/order
 * @desc Create an order
 * @access Private/customer
 */
router.post('/', auth, createOrder)

/*
 * @route PUT api/order/:orderId
 * @desc Change the status of order
 * @access Private/restaurant
 */
router.put('/:orderId', auth, changeOrderStatus)

/*
 * @route GET api/order/restaurant
 * @desc Get all the orders for logged in restaurant
 * @access Private/restaurant
 */
router.get('/restaurant', auth, listOrdersForRestaurant)

/*
 * @route GET api/order/customer
 * @desc Get all the orders for logged in customer
 * @access Private/customer
 */
router.get('/customer', auth, listOrdersForCustomer)

module.exports = router
