const express = require('express')
const { auth, restaurantProtected } = require('../middleware/auth.middleware')
const {
	createMenuItem,
	getMenuItem
} = require('../controllers/menuItem.controller')
const router = express.Router()

/*
 * @route POST api/menu
 * @desc Create a menu Item
 * @access Private/restaurant
 */
router.post('/', auth, restaurantProtected, createMenuItem)

/*
 * @route GET api/menu
 * @desc Get a menu item by its id
 * @access Public
 */
router.get('/:menuItemId', getMenuItem)

module.exports = router
