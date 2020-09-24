'use strict'

const path = require('path')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5008))

app.get('/', async (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`Listening at http://localhost:${app.get('port')}`)
})
