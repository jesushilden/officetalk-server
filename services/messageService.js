const Organization = require('../models/organization')
const Message = require('../models/message')

const getAll = async () => {
  return await Message.find({})
}

const getOne = async (id) => {
  return await Message.findById(id)
}

const create = async (content, employee) => {

  const message = await Message.create({
    content,
    author: employee._id,
    organization: employee.organization
  })

  await Organization.findOneAndUpdate({ _id: employee.organization }, { $addToSet: { messages: message._id } })

  return message
    .populate({
      path: 'author',
      select: '_id name username avatar'
    })
    .execPopulate()
}

const updateOne = async (id, content) => {
  return await Message.findByIdAndUpdate(id, { content }, { new: true })
}

const deleteOne = async (id) => {
  const message = await Message.findById(id)

  await Organization.findOneAndUpdate({ _id: message.organization }, { $pull: { messages: message._id } })

  await message.remove()
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne
}