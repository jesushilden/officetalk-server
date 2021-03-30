class OfficetalkSocket {

  constructor() {
    this.signinService = require('./services/signinService')
    this.mongoose = require('mongoose')
    this.employeeSockets = new Map()
    this.employeeStates = []
    this.twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  }

  initialize(server) {
    this.io = require('socket.io')(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    })

    this.io.on('connection', async (socket) => {

      const employee = await this.signinService.signin(socket.handshake.auth.token)

      await this.emitInitialDataToSocket(socket.id, employee.organization.toString())
      this.addSocket(employee, socket.id)

      console.log('client', socket.id, 'connected')
      console.log('employee', employee._id, 'connected')

      socket.on('disconnect', () => {
        this.removeSocket(socket.id)
        console.log('employee', socket.id, 'disconnected')
      })

    })
  }

  addSocket(employee, socketId) {
    const employeeId = employee._id.toString()
    if (!this.employeeSockets.has(employeeId)) {
      this.employeeSockets.set(employeeId, new Set([socketId]))
      this.addState(employee)
    } else {
      this.employeeSockets.get(employeeId).add(socketId)
    }
  }

  removeSocket(socketId) {
    this.employeeSockets.forEach((value, key, map) => {
      if (value.has(socketId)) {
        value.delete(socketId)
        if (value.size === 0) {
          map.delete(key)
          this.removeState(key)
        }
      }
    })
  }

  addState(employee) {
    const employeeState = {
      employeeId: employee._id.toString(),
      organizationId: employee.organization.toString(),
      muted: false,
      silenced: false,
      position: {
        room: -1,
        coordinates: {
          x: 5,
          y: 360
        }
      }
    }

    this.employeeStates.push(employeeState)
    this.emitToOrganization(employeeState.organizationId, 'addEmployeeState', employeeState)
  }

  removeState(employeeId) {
    const employeeState = this.employeeStates.find(state => state.employeeId === employeeId)
    this.employeeStates = this.employeeStates.filter(state => state.employeeId !== employeeId)
    this.emitToOrganization(employeeState.organizationId, 'removeEmployeeState', employeeState)
  }

  updateState(employeeState) {
    this.employeeStates = this.employeeStates.map(state => state.employeeId === employeeState.employeeId ? employeeState : state)
    this.emitToOrganization(employeeState.organizationId, 'updateEmployeeState', employeeState)
  }

  addRoomMessage(content, employee) {
    const roomMessage = {
      _id: this.mongoose.Types.ObjectId(),
      content,
      author: {
        _id: employee._id,
        name: employee.name,
        username: employee.username,
        avatar: employee.avatar
      }
    }
    const employeeState = this.employeeStates.find(state => state.employeeId === employee._id.toString())

    this.emitToOrganizationRoom(employeeState.organizationId, employeeState.position.room, 'roomMessage', roomMessage)
  }

  startCall(data, employee) {
    const employeeState = this.employeeStates.find(state => state.employeeId === employee._id.toString())
    this.emitToOrganizationRoom(employeeState.organizationId, employeeState.employeeId, 'callAccepted', data)
  }

  sendSignal(employeeId, signal, employee) {
    const employeeState = this.employeeStates.find(state => state.employeeId === employee._id.toString())
    const receiverState = this.employeeStates.find(state => state.employeeId === employeeId)

    if (employeeState.organizationId !== receiverState.organizationId || employeeState.position.room !== receiverState.position.room) {
      new Error('Not in same room')
    }

    const data = {
      signal,
      employeeId: employee._id.toString()
    }
    this.emitToEmployee(employeeId, 'sendSignal', data)
  }

  returnSignal(employeeId, signal, employee) {
    const employeeState = this.employeeStates.find(state => state.employeeId === employee._id.toString())
    const receiverState = this.employeeStates.find(state => state.employeeId === employeeId)

    if (employeeState.organizationId !== receiverState.organizationId || employeeState.position.room !== receiverState.position.room) {
      new Error('Not in same room')
    }

    const data = {
      signal,
      employeeId: employee._id.toString()
    }
    this.emitToEmployee(employeeId, 'returnSignal', data)
  }


  async emitInitialDataToSocket(socketId, organizationId) {
    const statesToEmit = this.employeeStates.filter(state => state.organizationId === organizationId)
    const twilioToken = await this.twilio.tokens.create()
    const iceServers = twilioToken.iceServers
    this.io.to(socketId).emit('initialData', { employeeStates: statesToEmit, iceServers })
  }

  emitToEmployee(employeeId, eventName, eventPayload) {
    this.employeeSockets.get(employeeId).forEach(socketId => {
      this.io.to(socketId).emit(eventName, eventPayload)
    })
  }

  emitToOrganization(organizationId, eventName, eventPayload) {
    const statesInOrganization = this.employeeStates.filter(state => state.organizationId === organizationId)

    statesInOrganization.forEach(state => {
      this.employeeSockets.forEach((value, key) => {
        if (state.employeeId === key) {
          value.forEach(socketId => {
            this.io.to(socketId).emit(eventName, eventPayload)
          })
        }
      })
    })
  }

  emitToOrganizationRoom(organizationId, roomId, eventName, eventPayload) {
    const statesInOrganizationRoom = this.employeeStates.filter(state => state.organizationId === organizationId && state.position.room === roomId)

    statesInOrganizationRoom.forEach(state => {
      this.employeeSockets.forEach((value, key) => {
        if (state.employeeId === key) {
          value.forEach(socketId => {
            this.io.to(socketId).emit(eventName, eventPayload)
          })
        }
      })
    })
  }


}

module.exports = new OfficetalkSocket()