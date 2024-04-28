const cron = require('cron')
const https = require('https')
const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:3000'

const job = new cron.CronJob('*/14 * * * *', () => {
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log('Server restarted')
      } else {
        console.error(
          `failed to restart server with status code : ${res.statusCode}`,
        )
      }
    })
    .on('error', (err) => console.error('Error during restart:', err.message))
})

module.exports = {
  job,
}
