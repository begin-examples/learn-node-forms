let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function http(req) {
  if (!req.session.account) {
    return {
      statusCode: 303,
      headers: {
        location: '/admin'
      }
    }
  }
  try {
    let draft = req.body
    draft.author = req.session.account.name
    draft.avatar = req.session.account.avatar
    await drafts.save(draft)
    return {
      statusCode: 303,
      headers: {
        location: '/admin'
      }
    }
  }
  catch(e) {
    return {
      statusCode: 303,
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      },
      body: `${e.message} <pre>${e.stack}`
    }
  }
}

exports.handler = arc.http.async(http)
