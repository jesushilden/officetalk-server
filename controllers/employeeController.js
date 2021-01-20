const Employee = require('../models/employee')
const employeeService = require('../services/employeeService')
const signinService = require('../services/signinService')

const getAll = async (request, response) => {
  try {
    const employees = await employeeService.getAll()
    response.json(employees.map(Employee.format))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch employees')
  }
}

const getOne = async (request, response) => {
  const id = request.params.id
  
  try {  
    const employee = await employeeService.getOne(id)
    employee ? response.json(Employee.format(employee)) : response.status(400).json('Could not find employee with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not fetch employee with id: ' + id)
  }
}

const create = async (request, response) => {
  const name = request.body.name
  const username = request.body.username
  const password = request.body.password
  const token = request.cookies['jwt']
  
  try {
    const organization = await signinService.signin(token)
    const employee = await employeeService.create(name, username, password, organization)
    response.status(201).json(Employee.format(employee))
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not create employee')
  }
}

const updateOne = async (request, response) => {
  const id = request.params.id
  const name = request.body.name
  const username = request.body.username
  
  try {  
    const employee = await employeeService.updateOne(id, name, username)
    employee ? response.json(Employee.format(employee)) : response.status(400).json('Could not find employee with id: ' + id)
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not update employee with id: ' + id)
  }
}

const deleteOne = async (request, response) => {
  const id = request.params.id
  
  try {  
    await employeeService.deleteOne(id)
    response.status(204).end()
  } catch (exception) {
    console.error(exception)
    response.status(400).json('Could not delete employee with id: ' + id)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}