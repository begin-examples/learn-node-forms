let arc = require('@architect/functions')
let github = require('./github')

async function login(req) {
  if (req.query.code) {
    let account = await github(req)
    return {
      statusCode: 303,
      session: { account },
      headers: {
        location: '/admin'
      }
    }
  }
  else {
    return {
      statusCode: 401,
      headers: {
        location: '/admin/?authorized=false'
      }
    }
  }
}

exports.handler = arc.http.async(login)
