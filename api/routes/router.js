const { Router } = require('express')
const { name, version } = require('../../package.json')

module.exports = (app) => {

  const router = Router()

  // HealthCheck
  router.route('/').get((req, res) => {
    res.send({ name, version })
  })

  app.use('/v1', router)
}