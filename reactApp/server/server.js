import path from "path"
import express from "express"
import template from "./template.js";
import { MongoClient } from 'mongodb'

const CURRENT_WORKING_DIR = process.cwd()
let port = process.env.PORT || 3000
// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'

const app = express() 

// comment out when for production
import devBundle from './devBundle'
devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// Use connect method to connect to the server
MongoClient.connect(url, (err, db)=>{
  if(err) throw err
  console.log("Connected successfully to mongodb server")
  db.close()
})
