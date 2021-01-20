const Employee = require('../models/employee')
const bcrypt = require('bcrypt')

const getAll = async () => {
  return await Employee.find({})
}

const getOne = async (id) => {
  return await Employee.findById(id)
}

const create = async (name, username, password) => {
  const passwordHash = await bcrypt.hash(password, 10)

  const employee = {
    name,
    username,
    password: passwordHash
  }
  return await Employee.create(employee)
}

const updateOne = async (id, name, username) => {
  return await Employee.findByIdAndUpdate(id, { name, username }, { new: true })
}

const deleteOne = async (id) => {
  await Employee.findByIdAndDelete(id)
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}