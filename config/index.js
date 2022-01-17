require('dotenv').config()
const { execSync } = require('child_process')

const secrets = process.env.NODE_ENV === 'production'
  ? JSON.parse(execSync('node config/secrets.js'))
  : '{}'

const dato = {
  url: 'https://graphql.datocms.com/',
  token: secrets['dato-token'] || process.env.DATO_TOKEN
}

module.exports = {
  dato
}
