const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
    minlength: [3, 'Name too short'],
    maxlength: [256, 'Name too long']
  },
  username: {
    type: String,
    required: [true, 'Username required'],
    minlength: [3, 'Username too short'],
    maxlength: [256, 'Username too long']
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    minlength: [3, 'Password too short'],
    maxlength: [256, 'Password too long']
  }
})

const Organization = mongoose.model('Organization', organizationSchema)

module.exports = Organization