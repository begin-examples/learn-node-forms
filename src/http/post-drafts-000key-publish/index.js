let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let github = require('./github')

async function publish(req) {

  if (!req.session.account || !req.params.key) {
    return {
      location: '/'
    }
  }

  try {
    let token = req.session.account.token
    let draft = await drafts.read(req.params) 

    // publish to github
    await github({token, draft})

    // delete the draft
    await drafts.destroy(draft)

    // go back home
    return {
      location: '/admin'
    }
  }
  catch(e) {
    return {
      html: `
        <h3>${e.message}</h3>
        <pre>${e.stack}</pre>
      `
    }
  }
}

exports.handler = arc.http.async(publish)
