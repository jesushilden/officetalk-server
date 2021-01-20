const Organization = require('../models/organization')
const Employee = require('../models/employee')
const signinService = require('../services/signinService')

const signin = async (request, response) => {
  const token = request.cookies['jwt']
  
  try {
    const user = await signinService.signin(token)
    user.collection.collectionName === 'organization' ? response.status(200).json(Organization.format(user)) : response.status(200).json(Employee.format(user))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not sign in organization')
  }
}

const signinOrganization = async (request, response) => {
  const username = request.body.username
  const password = request.body.password

  try {
    const organization = await signinService.signinOrganization(username, password)
    const token = Organization.generateToken(organization)
    response.cookie('jwt', token, { expires: new Date(Date.now() + 604800000), httpOnly: true })
    response.status(200).json(Organization.format(organization))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not sign in organization')
  }
}

const signinEmployee = async (request, response) => {
  const username = request.body.username
  const password = request.body.password

  try {
    const employee = await signinService.signinEmployee(username, password)
    const token = Employee.generateToken(employee)
    response.cookie('jwt', token, { expires: new Date(Date.now() + 604800000), httpOnly: true })
    response.status(200).json(Employee.format(employee))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not sign in employee')
  }
}

module.exports = {
  signin,
  signinOrganization,
  signinEmployee
}