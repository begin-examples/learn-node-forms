module.exports = function form(draft) {
  if (!draft) {
    return `
      <form method=post action=/drafts>
        <input type=text name=title>
        <textarea name=body></textarea>
        <button>Save new draft</button>
      </form>
    `
  }
  return `
    <form method=post action=/drafts/${draft.key}>
      <input type=hidden name=key value=${draft.key}>
      <input type=hidden name=author value=${draft.author}>
      <input type=hidden name=avatar value=${draft.avatar}>
      <input type=text name=title value="${draft.title}">
      <textarea name=body>${draft.body}</textarea>
      <button>Save draft</button>
    </form>
    <form method=post action=/drafts/${draft.key}/publish>
      <button>Publish draft</button>
    </form>
  `
}
