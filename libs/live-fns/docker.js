const axios = require('../axios.js')
const millify = require('millify')

module.exports = async function (topic, namespace, name) {
  const endpoint = `https://hub.docker.com/v2/repositories/${namespace}/${name}`
  const { data, status } = await axios(endpoint)

  switch (status) {
    case 404:
      return {
        subject: 'docker',
        status: '404',
        color: 'red'
      }
  }

  /* eslint-disable camelcase */
  const { pull_count, star_count } = data

  switch (topic) {
    case 'stars':
      return {
        subject: 'docker stars',
        status: millify(star_count),
        color: 'blue'
      }
    case 'pulls':
      return {
        subject: 'docker pulls',
        status: millify(pull_count)
      }
    case 'build':
      return {}
    default:
  }
}
