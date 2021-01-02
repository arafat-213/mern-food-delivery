const express = require('express')
const {
	registerValidator,
	loginValidator
} = require('../validators/user.validator')
const { createUser, login } = require('../controllers/user.controller')

const router = express.Router()

/*
 * @route POST api/user/register
 * @desc Register user
 * @access Public
 */
router.post('/user/register', registerValidator, createUser)

/*
 * @route POST api/user/login
 * @desc Log in user
 * @access Public
 */
router.post('/user/login', loginValidator, login)

module.exports = router
