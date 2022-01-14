const server = require('./server')

const port = process.env.PORT || 1337
server({ port }, () => console.log(`Listening on port ${port}`))
