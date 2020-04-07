import path from "path"
import app from './express.js'
import config from "../config/config.js";
import mongoose from 'mongoose'

// comment out for production build
import devBundle from './devBundle'
devBundle.compile(app)

mongoose.connect(config.mongoUri) 
mongoose.connection.on('error', (error) => {
  console.log(`Unable to connect to database: ${config.mongoUri}`)
  throw new Error(error)
})

app.listen(config.port, (err) => {
  if (err) console.log(err)
  console.info('Server started on port %s.', config.port)
})

