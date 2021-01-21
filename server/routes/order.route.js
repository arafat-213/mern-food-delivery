const express = require('express')
const auth = require('../middleware/auth.middleware')
const {
	createOrder,
	listOrdersForRestaurant,
	listOrdersForCustomer
} = require('../controllers/order.controller')
const router = express.Router()

router.post('/', auth, createOrder)

router.get('/restaurant', auth, listOrdersForRestaurant)

router.get('/customer', auth, listOrdersForCustomer)

module.exports = router
