const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

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
    maxlength: [256, 'Username too long'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    minlength: [3, 'Password too short'],
    maxlength: [256, 'Password too long']
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }]
})

organizationSchema.statics.generateToken = (organization, expiresIn = '7d') => {
  const organizationForToken = {
    _id: organization._id,
    type: 'organization'
  }

  return jwt.sign(organizationForToken, process.env.SECRET, { expiresIn })
}

organizationSchema.statics.format = (organization) => ({
  _id: organization._id,
  name: organization.name,
  username: organization.username,
  employees: organization.employees,
  type: 'organization'
})

const Organization = mongoose.model('Organization', organizationSchema)

module.exports = Organization