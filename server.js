const path = reuire('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

// Load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NOVE_ENV} mode on port ${PORT}`)
})
