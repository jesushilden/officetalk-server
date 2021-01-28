const { isValidObjectId } = require('mongoose')
const Message = require('../models/message')
const messageService = require('../services/messageService')
const signinService = require('../services/signinService')

const getAll = async (request, response) => {
  try {
    const messages = await messageService.getAll()
    response.json(messages.map(Message.format))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch messages')
  }
}

const getOne = async (request, response) => {
  const id = request.params.id
  const token = request.cookies['jwt']

  try {
    const employee = await signinService.signin(token)
    const message = await messageService.getOne(id)
    if (!message) return response.status(400).json('Could not find message with id: ' + id)
    if (employee.organization !== message.organization) return response.status(403).json('You do not have required permission to fetch message with id: ' + id)
    response.json(Message.format(message))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch message with id: ' + id)
  }
}

const create = async (request, response) => {
  const content = request.body.content
  const token = request.cookies['jwt']

  try {
    const employee = await signinService.signin(token)
    const message = await messageService.create(content, employee)
    const formattedMessage = Message.format(message)
    response.locals.io.emit('message', formattedMessage)
    response.status(201).json(formattedMessage)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not create message')
  }
}

const updateOne = async (request, response) => {
  const id = request.params.id
  const content = request.body.content
  const token = request.cookies['jwt']

  try {
    const employee = await signinService.signin(token)
    const messageToUpdate = await messageService.getOne(id)
    if (employee._id !== messageToUpdate.author) return response.status(403).json('You do not have required permission to update message with id: ' + id)
    const message = await messageService.updateOne(id, content)
    message ? response.json(Message.format(message)) : response.status(400).json('Could not find message with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not update message with id: ' + id)
  }
}

const deleteOne = async (request, response) => {
  const id = request.params.id
  const token = request.cookies['jwt']

  try {
    const employee = await signinService.signin(token)
    const message = await messageService.getOne(id)
    if (employee._id !== message.author) return response.status(403).json('You do not have required permission to delete message with id: ' + id)
    await messageService.deleteOne(id)
    response.status(204).end()
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not delete message with id: ' + id)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}