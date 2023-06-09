import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function bootstrap() {
  try {
    //Database connection
    await mongoose.connect(config.database_url as string)
    console.log('Database is connected successfully')

    //listening Server
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('There is an error connecting to Database!', error)
  }
}
bootstrap()
