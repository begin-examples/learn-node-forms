let arc = require('@architect/functions')

async function logout() {
  return {
    statusCode: 303,
    session: {},
    headers: {
      location: '/'
    }
  }
}

exports.handler = arc.http.async(logout)
