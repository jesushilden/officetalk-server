class OfficetalkSocket {

  constructor() {
    this.signinService = require('./services/signinService')
    this.mongoose = require('mongoose')
    this.employeeSockets = new Map()
    this.employeeStates = []
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

      this.emitInitialStatesToSocket(socket.id, employee.organization.toString())
      this.addSocket(employee, socket.id)

      console.log('client', socket.id, 'connected')
      console.log('employee', employee._id, 'connected')

      // These will be converted to REST
      // These will be converted to REST
      socket.on('updateEmployeeState', ({ employeeState }) => {
        this.updateState(employeeState)
      })
      // These will be converted to REST
      // These will be converted to REST

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

  addRoomMessage(content, user) {
    const roomMessage = {
      _id: this.mongoose.Types.ObjectId(),
      content,
      author: {
        _id: user._id,
        name: user.name,
        username: user.username,
        avatar: user.avatar
      }
    }
    const employeeState = this.employeeStates.find(state => state.userId === user._id.toString())

    this.emitToOrganizationRoom(employeeState.organizationId, employeeState.userId, 'roomMessage', roomMessage)
  }

  startCall(data, user) {
    const employeeState = this.employeeStates.find(state => state.userId === user._id.toString())
    this.emitToOrganizationRoom(employeeState.organizationId, employeeState.userId, 'callAccepted', data)
  }

  emitInitialStatesToSocket(socketId, organizationId) {
    const statesToEmit = this.employeeStates.filter(state => state.organizationId === organizationId)
    this.io.to(socketId).emit('employeeStates', statesToEmit)
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