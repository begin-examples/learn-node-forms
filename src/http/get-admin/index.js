let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let signin = require('@architect/views/signin')
let admin = require('@architect/views/admin')

async function http(req) {
  if (req.session.account) {
    let results = await drafts.read()
    return {
      html: admin(results)
    }
  }
  return {
    html: signin()
  }
}

exports.handler = arc.http.async(http)
