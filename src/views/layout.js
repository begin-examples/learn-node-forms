module.exports = function layout(body) {
  return `
<!doctype html>
<html>
<body>
<form method=post action=/logout>
  <button>Logout</button>
</form>
${body}
</body>
</html>`
}

