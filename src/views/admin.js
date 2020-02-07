let layout = require('./layout')
let form = require('./form')

module.exports = function admin(drafts) {
  let html = form()
  for (let i of drafts) {
    html += `
      <li>
        <a href=/api/drafts/${i.key}>${i.title}</a>
        <form method=post action=/api/drafts/${i.key}/destroy>
          <button>X</button>
        </form>
      </li>
    `
  }
  return layout(`<ul>${html}</ul>`)
}
