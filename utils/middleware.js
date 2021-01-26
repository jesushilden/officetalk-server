const jwt = require('jsonwebtoken')

const organizationAuth = (request, response, next) => {
  const token = request.cookies['jwt']
  try {
    const user = jwt.verify(token, process.env.SECRET)

    if (user.type === 'organization') {
      next()
    } else if (user.type === 'employee') {
      return response.status(403).json('You do not have required permission')
    } else {
      return response.status(401).json('Token missing or invalid')
    }
  } catch (exception) {
    console.log(exception)
    return response.status(401).json('Token missing or invalid')
  }
}

const employeeAuth = (request, response, next) => {
  const token = request.cookies['jwt']
  try {
    const user = jwt.verify(token, process.env.SECRET)

    if (user.type === 'employee') {
      next()
    } else if (user.type === 'organization') {
      return response.status(403).json('You do not have required permission')
    } else {
      return response.status(401).json('Token missing or invalid')
    }
  } catch (exception) {
    console.log(exception)
    return response.status(401).json('Token missing or invalid')
  }
}

module.exports = {
  organizationAuth,
  employeeAuth
}