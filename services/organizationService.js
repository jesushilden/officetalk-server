const Organization = require('../models/organization')
const bcrypt = require('bcrypt')

const getAll = async () => {
  return await Organization.find({})
}

const getOne = async (id) => {
  return await Organization.findById(id)
}

const create = async (name, username, password) => {
  const passwordHash = await bcrypt.hash(password, 10)

  const organization = {
    name,
    username,
    password: passwordHash
  }
  return await Organization.create(organization)
}

const updateOne = async (id, name, username) => {
  return await Organization.findByIdAndUpdate(id, { name, username }, { new: true })
}

const deleteOne = async (id) => {
  await Organization.findByIdAndDelete(id)
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}