import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the University Management Server!')
})

export default app
