const jwt = require('jsonwebtoken')

const organizationAuth = (request, response, next) => {
  const token = request.cookies['jwt']

  const user = jwt.verify(token, process.env.SECRET)

  if (user.type === 'organization') {
    next()
  } else if (user.type === 'employee') {
    return response.status(403).json('You do not have required permission')
  } else {
    return response.status(401).json('Token missing or invalid')
  }
}

module.exports = {
  organizationAuth
}