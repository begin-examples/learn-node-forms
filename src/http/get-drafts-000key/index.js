let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let layout = require('@architect/views/layout')
let form = require('@architect/views/form')
let render = draft=> layout(form(draft))

async function http(req) {
  if (req.session.account) {
    let draft = await drafts.read(req.params)
    return {
      statusCode: 303,
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      },
      body: render(draft)
    }
  }
  return {
    statusCode: 303,
    headers: {
      location: '/admin'
    }
  }
}

exports.handler = arc.http.async(http)
