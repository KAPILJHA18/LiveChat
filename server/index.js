require('dotenv').config()
const { request } = require('http')
const express = require('express')
const compression = require('compression')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 8080
const connectionString = process.env.ConnectionString

// Database connection
mongoose.connect(connectionString, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log(`connected to database`))

// app config
app.use(express.json())
app.use(compression())

// Routes
const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

// Server running PORT
app.listen(port, () => console.log(`Server listening on PORT http://localhost:${port}/`))

