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

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const organizationRouter = require('./routers/organizationRouter')
const employeeRouter = require('./routers/employeeRouter')
const officeRouter = require('./routers/officeRouter')
const roomRouter = require('./routers/roomRouter')
const messageRouter = require('./routers/messageRouter')
const signinRouter = require('./routers/signinRouter')

io.on('connection', socket => {
  console.log('client', socket.id, 'connected')
  console.log(socket.handshake.auth.token)
  socket.on('disconnect', () => {
    console.log('user', socket.id, 'disconnected')
  })
})

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