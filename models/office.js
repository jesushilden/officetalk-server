const mongoose = require('mongoose')

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 256
  },
  rooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  }],
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }
})

officeSchema.statics.format = (office) => ({
  _id: office._id,
  name: office.name,
  rooms: office.rooms,
  organization: office.organization
})

const Office = mongoose.model('Office', officeSchema)

module.exports = Office