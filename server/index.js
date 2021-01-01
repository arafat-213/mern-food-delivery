const express = require('express')
const connectDB = require('./config/db')

const app = express()

// connect the databse
connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
})
