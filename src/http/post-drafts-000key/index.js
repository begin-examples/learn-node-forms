let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function http(req) {
  if (!req.session.account) {
    return {
      location: '/admin'
    }
  }
  try {
    let draft = req.body
    draft.author = req.session.account.name
    draft.avatar = req.session.account.avatar
    await drafts.save(draft)
    return {
      location: '/admin'
    }
  }
  catch(e) {
    return {
      html: `${e.message} <pre>${e.stack}`
    }
  }
}

exports.handler = arc.http.async(http)
