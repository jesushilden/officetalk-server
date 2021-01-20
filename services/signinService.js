const Organization = require('../models/organization')
const Employee = require('../models/employee')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signin = async (token) => {
  const user = jwt.verify(token, process.env.SECRET)

  switch (user.type) {
    case 'organization':
      return await Organization.findById(user._id)
    case 'employee':
      return await Employee.findById(user._id)
    default:
      throw new Error('Token not valid')
  }
}

const signinOrganization = async (username, password) => {
  const organization = await Organization.findOne({ username })

  const passwordCorrect = organization && await bcrypt.compare(password, organization.password)

  if (!passwordCorrect) {
    throw new Error('Invalid username or password')
  }

  return organization
}

const signinEmployee = async (username, password) => {
  const employee = await Employee.findOne({ username })

  const passwordCorrect = employee && await bcrypt.compare(password, employee.passwordHash)

  if (!passwordCorrect) {
    throw new Error('Invalid username or password')
  }

  return employee
}

module.exports = {
  signin,
  signinOrganization,
  signinEmployee
}