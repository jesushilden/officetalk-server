process.env.NODE_ENV !== 'production' && require('dotenv').config()

const express = require('express')
const db = require('./db')
const app = express()
const server = require('http').createServer(app)
const officetalkSocket = require('./officetalkSocket')
officetalkSocket.initialize(server)

const port = process.env.PORT

const path = require('path')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const organizationRouter = require('./routers/organizationRouter')
const employeeRouter = require('./routers/employeeRouter')
const officeRouter = require('./routers/officeRouter')
const roomRouter = require('./routers/roomRouter')
const messageRouter = require('./routers/messageRouter')
const signinRouter = require('./routers/signinRouter')
const socketRouter = require('./routers/socketRouter')

app.use(express.static(path.join(__dirname, './build')))

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/organizations', organizationRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/offices', officeRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/messages', messageRouter)
app.use('/api/signin', signinRouter)
app.use('/api/sockets', socketRouter)

server.listen(port, () => {
  console.log(`Listening at PORT: ${port}`)
})