const Organization = require('../models/organization')
const Office = require('../models/office')
const Room = require('../models/room')

const getAll = async () => {
  return await Office.find({})
}

const getOne = async (id) => {
  return await Office.findById(id)
}

const create = async (name, organization) => {

  const office = await Office.create({
    name,
    organization: organization._id
  })

  await Organization.findByIdAndUpdate(organization._id, { office: office._id })

  return office
}

const updateOne = async (id, name) => {
  return await Office.findByIdAndUpdate(id, { name }, { new: true })
}

const deleteOne = async (id) => {
  const office = await Office.findById(id)

  await Organization.findByIdAndUpdate(office.organization, { office: undefined })

  await Room.deleteMany({ office: id })

  await office.remove()
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}