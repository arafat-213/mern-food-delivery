const express = require('express')
const {
	listRestaurants,
	createRestaurant,
	getRestaurant,
	addItemToMenu,
	updateItemFromMenu,
	deleteItemFromMenu
} = require('../controllers/restaurant.controller')
const {
	createRestaurantValidator
} = require('../validators/restaurant.validator')

const { auth, restaurantProtected } = require('../middleware/auth.middleware')

const router = express.Router()

/*
 * @route POST api/restaurant
 * @desc Create a new restaurant
 * @access Private
 */
router.post(
	'/',
	[auth, restaurantProtected, createRestaurantValidator],
	createRestaurant
)

/*
 * @route GET api/restaurant/list
 * @desc Get the list of restaurants
 * @access Public
 */
router.get('/list', listRestaurants)

/*
 * @route GET api/restaurant/:restaurantId
 * @desc Get a restaurant by its id
 * @access Public
 */
router.get('/:restaurantId', getRestaurant)

/*
 * @route PUT api/restaurant/menu/:itemId
 * @desc Edit a menu item from the menu
 * @access Private
 */
router.put('/menu/:itemId', auth, updateItemFromMenu)

/*
 * @route DELETE api/restaurant/menu/:itemId
 * @desc Delete the menu for a restaurant
 * @access Private
 */
router.delete('/menu/:itemId', auth, deleteItemFromMenu)

module.exports = router
