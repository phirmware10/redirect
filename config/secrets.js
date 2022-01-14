const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')

const client = new SecretManagerServiceClient()

module.exports = getSecret

async function getSecret (name) {
  const [ version ] = await client.accessSecretVersion({ name: `projects/steadfast-task-261712/secrets/${name}/versions/latest` })
  return version.payload.data.toString()
}
