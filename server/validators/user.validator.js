const { check } = require('express-validator')

// User registration
exports.registerValidator = [
	check('name', 'Name is required').notEmpty(),
	check('email', 'Invalid email').isEmail(),
	check('password', 'Password must contain at least 6 characters')
		.isLength({ min: 6 })
		.matches(/\d/)
		.withMessage('Password must contain a number')
]

exports.loginValidator = [
	check('email', 'Invalid email').isEmail(),
	check('password', 'Password is required').notEmpty()
]
