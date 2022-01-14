const { promisify } = require('util')
const request = promisify(require('request').post)
const { dato: { url }, getDatoSecret } = require('../config')

module.exports = {
  findSlugImage
}

const datoFetch = async (query, variables, config) => {
  const { url, token } = config
  const params = {
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ query, ...(variables && { variables }) })
  }

  const { body } = await request(params)

  return JSON.parse(body).data
}

const SLUG_QUERY = `
query($slugPattern: String) {
  courseDownload(filter: {slug: {eq: $slugPattern}}){
    file { url }
  }
}
`

async function findSlugImage (slugPattern) {
  const token = await getDatoSecret()
  const { courseDownload } = await datoFetch(SLUG_QUERY, { slugPattern }, { url, token })

  return courseDownload
}
