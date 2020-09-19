let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function destroy(req) {
  if (!req.session.account) {
    return {
      statusCode: 303,
      headers: {
        location: '/admin'
      }
    }
  }
  await drafts.destroy(req.params)
  return {
    statusCode: 303,
    headers: {
      location: '/admin'
    }
  }
}

exports.handler = arc.http.async(destroy)
