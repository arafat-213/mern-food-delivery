const { check } = require('express-validator')

// Adding a restaurant
exports.createRestaurantValidator = [
	check('name', 'Name is required').notEmpty(),
	// check('owner', 'Owner is required').isMongoId(),
	check('address', 'Insufficient address').isLength({
		min: 8
	}),
	check('phoneNumber', 'Invalid phone number').isNumeric(),
	check('description', 'Description is required').notEmpty()
]
