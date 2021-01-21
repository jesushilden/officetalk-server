const Office = require('../models/office')
const officeService = require('../services/officeService')
const signinService = require('../services/signinService')

const getAll = async (request, response) => {
  try {
    const offices = await officeService.getAll()
    response.json(offices.map(Office.format))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch offices')
  }
}

const getOne = async (request, response) => {
  const id = request.params.id
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    if (organization.office.toString() !== id) response.status(403).json('You do not have required permission to fetch office with id: ' + id)
    const office = await officeService.getOne(id)
    if (!office) response.status(400).json('Could not find office with id: ' + id)
    response.json(Office.format(office))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch office with id: ' + id)
  }
}

const create = async (request, response) => {
  const name = request.body.name
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    const office = await officeService.create(name, organization)
    response.status(201).json(Office.format(office))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not create office')
  }
}

const updateOne = async (request, response) => {
  const id = request.params.id
  const name = request.body.name
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    if (organization.office.toString() !== id) response.status(403).json('You do not have required permission to update office with id: ' + id)
    const office = await officeService.updateOne(id, name)
    office ? response.json(Office.format(office)) : response.status(400).json('Could not find office with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not update office with id: ' + id)
  }
}

const deleteOne = async (request, response) => {
  const id = request.params.id
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    if (organization.office.toString() !== id) response.status(403).json('You do not have required permission to delete office with id: ' + id)
    await officeService.deleteOne(id)
    response.status(204).end()
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not delete office with id: ' + id)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}