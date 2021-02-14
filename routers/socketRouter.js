const socketRouter = require('express').Router()
const socketController = require('../controllers/socketController')
const middleware = require('../utils/middleware')

socketRouter.put('/employeeState', middleware.employeeAuth, socketController.updateState)

socketRouter.post('/roomMessage', middleware.employeeAuth, socketController.addRoomMessage)

socketRouter.post('/sendSignal', middleware.employeeAuth, socketController.sendSignal)

socketRouter.post('/returnSignal', middleware.employeeAuth, socketController.returnSignal)

module.exports = socketRouter