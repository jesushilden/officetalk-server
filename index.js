process.env.NODE_ENV !== 'production' && require('dotenv').config()

const express = require('express')
const db = require('./db')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})
const port = process.env.PORT

const path = require('path')

const signinService = require('./services/signinService')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const organizationRouter = require('./routers/organizationRouter')
const employeeRouter = require('./routers/employeeRouter')
const officeRouter = require('./routers/officeRouter')
const roomRouter = require('./routers/roomRouter')
const messageRouter = require('./routers/messageRouter')
const signinRouter = require('./routers/signinRouter')

const workspaces = io.of(/^\/\w+$/)
const clients = {}
const employeeStates = {}

workspaces.on('connection', async (socket) => {
  const workspace = socket.nsp

  if (!clients[workspace.name]) {
    clients[workspace.name] = {}
  }

  if (!clients[workspace.name][socket.user._id]) {
    clients[workspace.name][socket.user._id] = []
  }

  if (clients[workspace.name][socket.user._id].indexOf(socket.id) === -1) {
    clients[workspace.name][socket.user._id].push(socket.id)
  }

  if (!employeeStates[socket.user._id]) {
    employeeStates[socket.user._id] = {
      userId: socket.user._id,
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
  }

  const employees = Object.keys(clients[workspace.name])
    .filter(userId => clients[workspace.name][userId].length !== 0)
    .map(userId => employeeStates[userId])

  workspace.emit('employees', employees)

  console.log('client', socket.id, 'connected to workspace', workspace.name)

  socket.on('employeeState', ({ employeeState }) => {
    if (socket.user._id.toString() !== employeeState.userId) {
      new Error('Token not valid')
    }

    employeeStates[socket.user._id] = employeeState
    workspace.emit('employeeState', employeeState)
  })

  socket.on('disconnect', () => {
    clients[workspace.name][socket.user._id] = clients[workspace.name][socket.user._id].filter(socketId => socketId !== socket.id)

    const employees = Object.keys(clients[workspace.name])
      .filter(userId => clients[workspace.name][userId].length !== 0)
      .map(userId => employeeStates[userId])

    workspace.emit('employees', employees)

    console.log('user', socket.id, 'disconnected')
  })
})

workspaces.use(async (socket, next) => {
  // ensure the user has access to the workspace
  const user = await signinService.signin(socket.handshake.auth.token)
  if (user.organization.toString() === socket.nsp.name.substring(1)) {
    socket.user = user
    next()
  } else {
    next(new Error('Token not valid'))
  }
})

app.use(express.static(path.join(__dirname, './build')))

app.use((req, res, next) => {
  res.locals.io = io
  next()
})
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/organizations', organizationRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/offices', officeRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/messages', messageRouter)
app.use('/api/signin', signinRouter)

app.get('/', (req, res) => {
  res.send('Hello World, it is Peter!')
})

server.listen(port, () => {
  console.log(`Listening at PORT: ${port}`)
})