const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to London-Unified-Departure-Times-App Service APIs.')
})

app.listen(3000, function () {
  console.log('London-Unified-Departure-Times-App service listening on port 3000!')
})