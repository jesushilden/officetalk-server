const organizationRouter = require('express').Router()
const organizationController = require('../controllers/organizationController')

organizationRouter.get('/', organizationController.getAll)

organizationRouter.get('/:id', organizationController.getOne)

organizationRouter.post('/', organizationController.create)

organizationRouter.put('/:id', organizationController.updateOne)

organizationRouter.delete('/:id', organizationController.deleteOne)

module.exports = organizationRouter