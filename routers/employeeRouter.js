const employeeRouter = require('express').Router()
const employeeController = require('../controllers/employeeController')
const middleware = require('../utils/middleware')

employeeRouter.get('/', employeeController.getAll)

employeeRouter.get('/:id', employeeController.getOne)

employeeRouter.post('/', middleware.organizationAuth, employeeController.create)

employeeRouter.put('/:id', employeeController.updateOne)

employeeRouter.delete('/:id', employeeController.deleteOne)

module.exports = employeeRouter