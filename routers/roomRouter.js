const roomRouter = require('express').Router()
const roomController = require('../controllers/roomController')
const middleware = require('../utils/middleware')

roomRouter.get('/', roomController.getAll)

roomRouter.get('/:id', middleware.organizationAuth, roomController.getOne)

roomRouter.post('/', middleware.organizationAuth, roomController.create)

roomRouter.put('/:id', middleware.organizationAuth, roomController.updateOne)

roomRouter.delete('/:id', middleware.organizationAuth, roomController.deleteOne)

module.exports = roomRouter