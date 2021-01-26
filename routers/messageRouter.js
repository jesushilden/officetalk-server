const messageRouter = require('express').Router()
const messageController = require('../controllers/messageController')
const middleware = require('../utils/middleware')

messageRouter.get('/', messageController.getAll)

messageRouter.get('/:id', middleware.employeeAuth, messageController.getOne)

messageRouter.post('/', middleware.employeeAuth, messageController.create)

messageRouter.put('/:id', middleware.employeeAuth, messageController.updateOne)

messageRouter.delete('/:id', middleware.employeeAuth, messageController.deleteOne)

module.exports = messageRouter