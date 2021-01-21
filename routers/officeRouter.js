const officeRouter = require('express').Router()
const officeController = require('../controllers/officeController')
const middleware = require('../utils/middleware')

officeRouter.get('/', officeController.getAll)

officeRouter.get('/:id', middleware.organizationAuth, officeController.getOne)

officeRouter.post('/', middleware.organizationAuth, officeController.create)

officeRouter.put('/:id', middleware.organizationAuth, officeController.updateOne)

officeRouter.delete('/:id', middleware.organizationAuth, officeController.deleteOne)

module.exports = officeRouter