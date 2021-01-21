const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 256
  },
  capacity: {
    type: Number,
    min: 0,
    max: 100
  },
  office: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Office'
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }
})

roomSchema.statics.format = (room) => ({
  _id: room._id,
  name: room.name,
  capacity: room.capacity,
  office: room.office,
  organization: room.organization
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room