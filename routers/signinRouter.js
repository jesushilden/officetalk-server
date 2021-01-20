const signinRouter = require('express').Router()
const signinController = require('../controllers/signinController')

signinRouter.post('/', signinController.signin)

signinRouter.post('/organization', signinController.signinOrganization)

signinRouter.post('/employee', signinController.signinEmployee)

signinRouter.post('/signout', signinController.signout)

module.exports = signinRouter