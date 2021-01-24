const express = require('express')
const auth = require('../middleware/auth.middleware')
const { createMenuItem } = require('../controllers/menuItem.controller')
const router = express.Router()

/*
 * @route POST api/menu
 * @desc Create a menu Item
 * @access Private/restaurant
 */
router.post('/', auth, createMenuItem)

module.exports = router
