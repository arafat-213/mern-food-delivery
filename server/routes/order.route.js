const express = require('express')
const auth = require('../middleware/auth.middleware')
const { createOrder } = require('../controllers/order.controller')
const router = express.Router()

router.post('/', auth, createOrder)

module.exports = router
