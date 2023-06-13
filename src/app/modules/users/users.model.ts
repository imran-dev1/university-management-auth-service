import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: String,
    password: String,
  },
  { timestamps: true }
)

export const User = model<IUser, UserModel>('user', userSchema)
