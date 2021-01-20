const Organization = require('../models/organization')
const organizationService = require('../services/organizationService')

const getAll = async (request, response) => {
  try {
    const organizations = await organizationService.getAll()
    response.json(organizations.map(Organization.format))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch organizations')
  }
}

const getOne = async (request, response) => {
  const id = request.params.id
  
  try {  
    const organization = await organizationService.getOne(id)
    organization ? response.json(Organization.format(organization)) : response.status(400).json('Could not find organization with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch organization with id: ' + id)
  }
}

const create = async (request, response) => {
  const name = request.body.name
  const username = request.body.username
  const password = request.body.password
  
  try {
    const organization = await organizationService.create(name, username, password)
    response.status(201).json(Organization.format(organization))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not create organization')
  }
}

const updateOne = async (request, response) => {
  const id = request.params.id
  const name = request.body.name
  const username = request.body.username
  
  try {  
    const organization = await organizationService.updateOne(id, name, username)
    organization ? response.json(Organization.format(organization)) : response.status(400).json('Could not find organization with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not update organization with id: ' + id)
  }
}

const deleteOne = async (request, response) => {
  const id = request.params.id
  
  try {  
    await organizationService.deleteOne(id)
    response.status(204).end()
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not delete organization with id: ' + id)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}