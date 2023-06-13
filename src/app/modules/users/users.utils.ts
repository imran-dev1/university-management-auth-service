import { User } from './users.model'

//Finding the latest id from DB
const findLatestId = async () => {
  const latestUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return latestUser?.id
}

//Generating the incremental id
export const generateUserId = async () => {
  const generatedId = (await findLatestId()) || (0).toString().padStart(5, '0')

  //increment by 1
  const incrementId = (parseFloat(generatedId) + 1).toString().padStart(5, '0')

  return incrementId
}
