let data = require('@begin/data')
let xss = require('xss')

/**
 * save draft
 *
 * @param {object} draft
 * @param {string} draft.key 
 * @param {string} draft.title
 * @param {string} draft.body
 * @param {string} draft.author
 * @param {string} draft.avatar
 */
async function save(draft) {
  let required = ['title', 'body', 'author', 'avatar']
  for (let param of required) {
    if (!draft[param])
      throw ReferenceError(`missing param ${param}`)
    if (draft[param] && draft[param].length < 4)
      throw RangeError(`${param} must be four or more characters`)
  }
  draft.title = xss(draft.title)
  draft.body = xss(draft.body)
  return data.set({
    table: 'drafts', 
    ...draft
  })
}

/**
 * read draft(s)
 *
 * @param {object} params
 * @param {string} params.cursor 
 * @param {string} params.key 
 */
async function read(params={}) {
  return data.get({
    table: 'drafts', 
    ...params
  })
}

/**
 * destroy draft
 *
 * @param {object} params
 * @param {string} params.key
 */
async function destroy(draft) {
  return data.destroy({
    table: 'drafts', 
    ...draft
  })
}

module.exports = {
  save,
  read,
  destroy
}
