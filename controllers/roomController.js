const Room = require('../models/room')
const roomService = require('../services/roomService')
const signinService = require('../services/signinService')

const getAll = async (request, response) => {
  try {
    const rooms = await roomService.getAll()
    response.json(rooms.map(Room.format))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch rooms')
  }
}

const getOne = async (request, response) => {
  const id = request.params.id
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    const room = await roomService.getOne(id)
    if (!room) return response.status(400).json('Could not find room with id: ' + id)
    if (organization._id !== room.organization) return response.status(403).json('You do not have required permission to fetch room with id: ' + id)
    response.json(Room.format(room))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch room with id: ' + id)
  }
}

const create = async (request, response) => {
  const name = request.body.name
  const capacity = request.body.capacity
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    const room = await roomService.create(name, capacity, organization)
    response.status(201).json(Room.format(room))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not create room')
  }
}

const updateOne = async (request, response) => {
  const id = request.params.id
  const name = request.body.name
  const capacity = request.body.capacity
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    const roomToUpdate = await roomService.getOne(id)
    if (organization._id !== roomToUpdate.organization) return response.status(403).json('You do not have required permission to update room with id: ' + id)
    const room = await roomService.updateOne(id, name, capacity)
    room ? response.json(Room.format(room)) : response.status(400).json('Could not find room with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not update room with id: ' + id)
  }
}

const deleteOne = async (request, response) => {
  const id = request.params.id
  const token = request.cookies['jwt']

  try {
    const organization = await signinService.signin(token)
    const room = await roomService.getOne(id)
    if (organization._id !== room.organization) return response.status(403).json('You do not have required permission to delete room with id: ' + id)
    await roomService.deleteOne(id)
    response.status(204).end()
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not delete room with id: ' + id)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}