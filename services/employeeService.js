const Employee = require('../models/employee')
const Organization = require('../models/organization')
const bcrypt = require('bcrypt')

const getAll = async () => {
  return await Employee.find({})
}

const getOne = async (id) => {
  return await Employee.findById(id)
}

const create = async (name, username, password, avatar, organization) => {
  const passwordHash = await bcrypt.hash(password, 10)

  const employee = await Employee.create({
    name,
    username,
    password: passwordHash,
    avatar,
    organization: organization._id
  })

  await Organization.findByIdAndUpdate(organization._id, { $addToSet: { employees: employee._id } })

  return employee
}

const updateOne = async (id, name, username, avatar, PTKey, pushToTalk) => {
  return await Employee.findByIdAndUpdate(id, { name, username, avatar, PTKey, pushToTalk }, { new: true })
}

const deleteOne = async (id) => {
  const employee = await Employee.findById(id)

  await Organization.findByIdAndUpdate(employee.organization, { $pull: { employees: employee._id } })

  await employee.remove()
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}