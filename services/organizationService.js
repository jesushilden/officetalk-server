const Organization = require('../models/organization')
const Employee = require('../models/employee')
const Office = require('../models/office')
const Room = require('../models/room')
const bcrypt = require('bcrypt')

const getAll = async () => {
  return await Organization.find({})
}

const getOne = async (id) => {
  return await Organization.findById(id)
    .populate('employees', { _id: 1, name: 1, username: 1 })
    .populate({
      path: 'office',
      populate: {
        path: 'rooms'
      }
    })
}

const create = async (name, username, password, logo) => {
  const passwordHash = await bcrypt.hash(password, 10)

  const organization = {
    name,
    username,
    password: passwordHash,
    logo
  }
  return await Organization.create(organization)
}

const updateOne = async (id, name, username, logo) => {
  return await Organization.findByIdAndUpdate(id, { name, username, logo }, { new: true })
}

const deleteOne = async (id) => {
  await Employee.deleteMany({ organization: id })
  await Office.deleteOne({ organization: id })
  await Room.deleteMany({ organization: id })
  await Organization.findByIdAndDelete(id)
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}