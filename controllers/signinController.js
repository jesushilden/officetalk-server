const Organization = require('../models/organization')
const Employee = require('../models/employee')
const signinService = require('../services/signinService')

const signin = async (request, response) => {
  const token = request.cookies['jwt']

  try {
    const user = await signinService.signin(token)
    const formattedUser = user.collection.collectionName === 'organizations' ? Organization.format(user) : Employee.format(user)
    response.status(200).json({ token, user: formattedUser })
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Token not valid')
  }
}

const signinOrganization = async (request, response) => {
  const username = request.body.username
  const password = request.body.password

  try {
    const organization = await signinService.signinOrganization(username, password)
    const formattedOrganization = Organization.format(organization)
    const token = Organization.generateToken(organization)
    response.cookie('jwt', token, { expires: new Date(Date.now() + 604800000), httpOnly: true })
    response.status(200).json({ token, user: formattedOrganization })
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Could not sign in organization')
  }
}

const signinEmployee = async (request, response) => {
  const username = request.body.username
  const password = request.body.password

  try {
    const employee = await signinService.signinEmployee(username, password)
    const formattedEmployee = Employee.format(employee)
    const token = Employee.generateToken(employee)
    response.cookie('jwt', token, { expires: new Date(Date.now() + 604800000), httpOnly: true })
    response.status(200).json({ token, user: formattedEmployee })
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Could not sign in employee')
  }
}

const signout = (request, response) => {
  response.clearCookie('jwt')
  response.status(204).end()
}

module.exports = {
  signin,
  signinOrganization,
  signinEmployee,
  signout
}