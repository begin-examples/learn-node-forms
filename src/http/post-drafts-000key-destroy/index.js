let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function destroy(req) {
  if (!req.session.account) {
    return {
      location: '/admin'
    }
  }
  await drafts.destroy(req.params)
  return {
    location: '/admin'
  }
}

exports.handler = arc.http.async(destroy)
