const express = require('express')
const {
	listRestaurants,
	createRestaurant
} = require('../controllers/restaurant.controller')
const {
	createRestaurantValidator
} = require('../validators/restaurant.validator')

const auth = require('../middleware/auth.middleware')

const router = express.Router()

/*
 * @route POST api/restaurant
 * @desc Create a new restaurant
 * @access Private
 */
router.post('/', [auth, createRestaurantValidator], createRestaurant)

/*
 * @route GET api/restaurant/list
 * @desc Create a new restaurant
 * @access Public
 */
router.get('/list', listRestaurants)

/*
 * @route GET api/restaurant/:id
 * @desc Get a restaurant by it's id
 * @access Public
 */
router.get('/:id', listRestaurants)

module.exports = router
