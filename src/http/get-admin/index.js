let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let signin = require('@architect/views/signin')
let admin = require('@architect/views/admin')

async function http(req) {
  if (req.session.account) {
    let results = await drafts.read()
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      },
      body: admin(results)
    }
  }
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    },
    body: signin()
  }
}

exports.handler = arc.http.async(http)
