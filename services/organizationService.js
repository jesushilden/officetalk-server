const Organization = require('../models/organization')
const Employee = require('../models/employee')
const Room = require('../models/room')
const bcrypt = require('bcrypt')

const getAll = async () => {
  return await Organization.find({})
}

const getOne = async (id) => {
  const organization = await Organization.findById(id)
    .populate({
      path: 'employees',
      select: '_id name username avatar'
    })
    .populate({
      path: 'rooms',
      select: '_id name capacity organization'
    })
    .populate({
      path: 'messages',
      select: '_id content author createdAt',
      populate: {
        path: 'author',
        select: '_id name username avatar'
      }
    })

  organization.messages.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)

  return organization
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