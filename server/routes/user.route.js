const express = require('express')
const {
	registerValidator,
	loginValidator
} = require('../validators/user.validator')
const { createUser, login, getAuth } = require('../controllers/user.controller')
const { auth } = require('../middleware/auth.middleware')
const router = express.Router()

/*
 * @route POST api/user/register
 * @desc Register user
 * @access Public
 */
router.post('/register', registerValidator, createUser)

/*
 * @route POST api/user/login
 * @desc Log in user
 * @access Public
 */
router.post('/login', loginValidator, login)

/*
 * @route GET api/user/auth
 * @desc Returns auth state for token
 * @access Private
 */
router.get('/auth', auth, getAuth)

module.exports = router
