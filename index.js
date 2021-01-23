process.env.NODE_ENV !== 'production' && require('dotenv').config()

const express = require('express')
const db = require('./db')
const app = express()
const port = process.env.PORT

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const organizationRouter = require('./routers/organizationRouter')
const employeeRouter = require('./routers/employeeRouter')
const officeRouter = require('./routers/officeRouter')
const roomRouter = require('./routers/roomRouter')
const signinRouter = require('./routers/signinRouter')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/organizations', organizationRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/offices', officeRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/signin', signinRouter)

app.get('/', (req, res) => {
  res.send('Hello World, it is Peter!')
})

app.listen(port, () => {
  console.log(`Listening at PORT: ${port}`)
})