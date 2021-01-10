const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user.route')
const restaurantRouter = require('./routes/restaurant.route')

require('dotenv').config({
	path: './config/config.env'
})

const app = express()

// use body parser
// Use body parser
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.json())

// connect the databse
connectDB()

// Load user routes

// use routes
app.use('/api/user', userRouter)
app.use('/api/restaurant', restaurantRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})
