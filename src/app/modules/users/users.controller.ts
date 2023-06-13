import { Request, Response } from 'express'
import { createUserInDB } from './users.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUserInDB(user)

    res.status(200).json({
      success: true,
      message: 'User is created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'There is a problem creating the user!',
      error,
    })
  }
}
