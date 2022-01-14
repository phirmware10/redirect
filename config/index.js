require('dotenv').config()
const getSecret = require('./secrets')

const dato = {
  url: 'https://graphql.datocms.com/'
}

async function getDatoSecret () {
  const token = await getSecret('dato-token')
  return token
}

module.exports = {
  dato,
  getDatoSecret
}
