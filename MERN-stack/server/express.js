import path from 'path'
import express from "express"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import template from "./template.js";
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const CURRENT_WORKING_DIR = process.cwd()

const app = express() 

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())
app.use(morgan('dev'))

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.use('/', userRoutes)
app.use('/', authRoutes)
app.use((err, req, res, next) => { 
  // handle unauthorized error (express-jwt)
  if(err.name === 'UnauthorizedError') res.status(401).json({ error: `${err.name}: ${err.message}` })
})

export default app