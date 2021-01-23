const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

module.exports = async (req, res, next) => {
	// Get token from req header
	const token = req.header('x-auth-token')

	// Check if token exists
	if (!token)
		return res.status(401).json({
			error: 'Authentication token missing. Log in again.'
		})

	// Verify token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		//token is valid
		req.user = await User.findById(decoded.id).select('-password')
		// Middleware has done its job, onto the next one now
		next()
	} catch (error) {
		console.error(error)
		// Invalid token
		return res.status(401).json({
			error: 'Authentication token expired. Log in again.'
		})
	}
}
