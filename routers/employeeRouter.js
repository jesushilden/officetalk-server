const employeeRouter = require('express').Router()
const employeeController = require('../controllers/employeeController')

employeeRouter.get('/', employeeController.getAll)

employeeRouter.get('/:id', employeeController.getOne)

employeeRouter.post('/', employeeController.create)

employeeRouter.put('/:id', employeeController.updateOne)

employeeRouter.delete('/:id', employeeController.deleteOne)

module.exports = employeeRouter