const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routes/user.route')
const restaurantRouter = require('./routes/restaurant.route')
const orderRouter = require('./routes/order.route')
const menuRouter = require('./routes/menuItem.route')

require('dotenv').config({
	path: './config/config.env'
})

const app = express()

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
app.use('/api/order', orderRouter)
app.use('/api/menu', menuRouter)

// cors config
if (process.env.NODE_ENV === 'development') {
	app.use(cors({ origin: process.env.CLIENT_URL }))
}
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})
