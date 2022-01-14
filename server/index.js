const express = require('express')
const dato = require('./dato')

const app = express()

app.get('/health', async function (req, res) {
  res.json({ message: 'okay' })
})

app.get('/:slug', async function (req, res) {
  const { slug } = req.params

  if (!slug) return res.status(404).json()

  const result = await dato.findSlugImage(slug)
  if (!result) return res.status(404).json({ message: 'Image not found' })

  res.redirect(result.file && result.file.url)
})

module.exports = (opts = {}, cb) => {
  const port = opts.port || 3000
  app.listen(port, cb)
}
