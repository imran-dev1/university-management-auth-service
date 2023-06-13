import config from '../../../config'
import { generateUserId } from './users.utils'
import { IUser } from './users.interface'
import { User } from './users.model'

export const createUserInDB = async (user: IUser): Promise<IUser | null> => {
  //Auto generated incremental id
  const id = await generateUserId()
  user.id = id

  //Default user password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}
