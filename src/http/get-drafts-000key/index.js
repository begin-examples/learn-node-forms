let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let layout = require('@architect/views/layout')
let form = require('@architect/views/form')
let render = draft=> layout(form(draft))

async function http(req) {
  if (req.session.account) {
    let draft = await drafts.read(req.params)
    return {
      html: render(draft)
    }
  }
  return {
    location: '/admin'
  }
}

exports.handler = arc.http.async(http)
