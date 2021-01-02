const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')

require('dotenv').config({
	path: './config/config.env'
})

const app = express()

// use body parser
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
// connect the databse
connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})
