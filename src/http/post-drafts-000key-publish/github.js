let { put } = require('tiny-json-http')

module.exports = async function publish({token, draft}) {

  let path = `${draft.title.toLowerCase().replace(/ /g, '-')}.md`
  let message = `feat: adds ${path}`
  let content = Buffer.from(draft.body).toString('base64')

  // https://developer.github.com/v3/repos/contents/#create-or-update-a-file
  await put({
    url: `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/src/md/${path}`,
    headers: {
      Accept: 'application/json',
      Authorization: `token ${token}`
    },
    data: {
      message,
      content,
    }
  })
}
