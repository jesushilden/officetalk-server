const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: [1, 'Message too short'],
    maxlength: [65536, 'Message too long']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }
}, { timestamps: true })

messageSchema.statics.format = (message) => ({
  _id: message._id,
  content: message.content,
  author: message.author,
  organization: message.organization,
  createdAt: message.createdAt
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message