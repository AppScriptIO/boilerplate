import path from "path"
import express from "express"
import template from "./template.js";


const CURRENT_WORKING_DIR = process.cwd()
let port = process.env.PORT || 3000

const app = express() 

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

