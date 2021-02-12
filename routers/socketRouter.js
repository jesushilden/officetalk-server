const socketRouter = require('express').Router()
const socketController = require('../controllers/socketController')
const middleware = require('../utils/middleware')

socketRouter.put('/employeeState', middleware.employeeAuth, socketController.updateState)

socketRouter.post('/roomMessage', middleware.employeeAuth, socketController.addRoomMessage)

socketRouter.post('/startCall', middleware.employeeAuth, socketController.startCall)

module.exports = socketRouter