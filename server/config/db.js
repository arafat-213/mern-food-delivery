const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect('MONGO_URL', {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: true
		})
		console.log('Database up and running')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

module.exports = connectDB
