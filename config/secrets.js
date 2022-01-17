const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')

const client = new SecretManagerServiceClient()

async function getSecret (name) {
  const [ version ] = await client.accessSecretVersion({ name: `projects/steadfast-task-261712/secrets/${name}/versions/latest` })
  return version.payload.data.toString()
}

async function getDatoSecret () {
  const name = 'dato-token'
  const token = await getSecret(name)
  console.log(JSON.stringify({ [name]: token }))
}

getDatoSecret()