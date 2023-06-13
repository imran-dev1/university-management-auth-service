import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { createUserInDB } from './app/modules/users/users.service'
import userRouter from './app/modules/users/users.route'

const app: Application = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', userRouter)

app.get('/', async (req: Request, res: Response) => {
  await createUserInDB({
    id: '111',
    password: '12345',
    role: 'student',
  })
  res.send('Welcome to the University Management Server!')
})

export default app
