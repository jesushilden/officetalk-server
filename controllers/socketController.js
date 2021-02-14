const signinService = require('../services/signinService')
const officetalkSocket = require('../officetalkSocket')

const updateState = async (request, response) => {
  const token = request.cookies['jwt']
  const state = request.body

  try {
    const employee = await signinService.signin(token)
    if (state.employeeId === employee._id.toString()) {
      officetalkSocket.updateState(state)
      response.status(200).end()
    } else {
      response.status(403).json('Token not valid')
    }
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Token not valid')
  }
}

const addRoomMessage = async (request, response) => {
  const token = request.cookies['jwt']
  const content = request.body.content

  try {
    const employee = await signinService.signin(token)
    officetalkSocket.addRoomMessage(content, employee)
    response.status(200).end()
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Token not valid')
  }
}

const sendSignal = async (request, response) => {
  const token = request.cookies['jwt']
  const signal = request.body.signal
  const employeeId = request.body.employeeId

  try {
    const employee = await signinService.signin(token)
    officetalkSocket.sendSignal(employeeId, signal, employee)
    response.status(200).end()
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Token not valid')
  }
}

const returnSignal = async (request, response) => {
  const token = request.cookies['jwt']
  const signal = request.body.signal
  const employeeId = request.body.employeeId

  try {
    const employee = await signinService.signin(token)
    officetalkSocket.returnSignal(employeeId, signal, employee)
    response.status(200).end()
  } catch (exception) {
    console.error(exception)
    response.status(401).json('Token not valid')
  }
}

module.exports = {
  updateState,
  addRoomMessage,
  sendSignal,
  returnSignal
}