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
  logo: {
    type: String,
    maxlength: [2048, 'Logo url too long']
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  office: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Office'
  }
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
  logo: organization.logo,
  employees: organization.employees,
  office: organization.office,
  type: 'organization'
})

const Organization = mongoose.model('Organization', organizationSchema)

module.exports = Organization