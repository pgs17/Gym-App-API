// index.js
const express = require('express')
import app from './server.js'
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('GymApp App API ')
})

app.get('/about', (req, res) => {
  res.send('Simple API built for GymApp App')
})

// Export the Express API
module.exports = app