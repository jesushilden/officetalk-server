process.env.NODE_ENV !== 'production' && require('dotenv').config()

const express = require('express')
const db = require('./db')
const app = express()
const port = 3001

const bodyParser = require('body-parser')

const organizationRouter = require('./routers/organizationRouter')

app.use(bodyParser.json())

app.use('/api/organizations', organizationRouter)

app.get('/', (req, res) => {
  res.send('Hello World, it is Peter!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})