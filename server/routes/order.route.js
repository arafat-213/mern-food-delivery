const express = require('express')
const auth = require('../middleware/auth.middleware')
const {
	createOrder,
	changeOrderStatus,
	listOrders
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
 * @route GET api/order/
 * @route // GET /order => All of the orders
 * GET /order?completed=true => orders which are completed
 * GET /order?completed=false => orders which are not completed
 * GET /order?limit=10 => Limits the resulting orders to  10 orders (int number) only
 * GET /order?skip=10 => Skips the first 10 orders and returns rest of the orders
 * GET /order?limit=10&skip10 => Skips first 10 orders and returns next 10 orders (11th to 20th task)
 * GET /order?property:sortStyle => Sorts the orders by propery in sortStyle order
 * GET /order?sortBy=createdAt:desc => Sorts the orders by timestamp of created at. (Descending)
 * GET /order?sortBy=createdAt:asc => Sorts the orders by timestamp of created at. (Ascending)
 * @desc Get all the orders for logged in restaurant
 * @access Private/restaurant/customer
 */
router.get('/', auth, listOrders)

module.exports = router
