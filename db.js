const mongoose = require('mongoose')

const dbUrl = process.env.MONGODB_URI

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// When the connection is established
mongoose.connection.on("connected", () => {
  console.log('Connected to Mongodb')
})

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to Mongodb', err);
})

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Connection to Mongodb disconnected')
})

const gracefulExit = () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit)

module.exports = mongoose