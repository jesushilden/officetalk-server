const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 256,
    required: true,
    default: 'New room'
  },
  capacity: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: 10
  }
})

module.exports = roomSchema