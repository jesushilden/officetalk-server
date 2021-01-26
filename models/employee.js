const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const employeeSchema = new mongoose.Schema({
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
  avatar: {
    type: String,
    maxlength: [2048, 'Avatar url too long']
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }
})

employeeSchema.statics.generateToken = (employee, expiresIn = '7d') => {
  const employeeForToken = {
    _id: employee._id,
    type: 'employee'
  }

  return jwt.sign(employeeForToken, process.env.SECRET, { expiresIn })
}

employeeSchema.statics.format = (employee) => ({
  _id: employee._id,
  name: employee.name,
  username: employee.username,
  avatar: employee.avatar,
  organization: employee.organization,
  type: 'employee'
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee