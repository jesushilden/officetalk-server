const Office = require('../models/office')
const Room = require('../models/room')

const getAll = async () => {
  return await Room.find({})
}

const getOne = async (id) => {
  return await Room.findById(id)
}

const create = async (name, capacity, organization) => {

  const room = await Room.create({
    name,
    capacity,
    office: organization.office,
    organization: organization._id
  })

  await Office.findByIdAndUpdate(organization.office, { $addToSet: { rooms: room._id } })

  return room
}

const updateOne = async (id, name, capacity) => {
  return await Room.findByIdAndUpdate(id, { name, capacity }, { new: true })
}

const deleteOne = async (id) => {
  const room = await Room.findById(id)

  await Office.findByIdAndUpdate(room.office, { $pull: { rooms: room._id } })

  await room.remove()
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}