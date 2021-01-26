const mongoose = require('mongoose')

const officeSchema = new mongoose.Schema({
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
  rooms: office.rooms,
  organization: office.organization
})

const Office = mongoose.model('Office', officeSchema)

module.exports = Office