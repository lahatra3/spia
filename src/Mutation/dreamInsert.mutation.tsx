import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { Dream, DreamParams, UserInsertResult } from '../Type/Type'

/**
 * @param {DreamParams} dream
 * @returns {UserInsertResult}
 */
export const dreamInsert = async ({
  description,
  response,
  user_id
}: DreamParams): Promise<UserInsertResult> => {

  const config: AxiosRequestConfig = {
    method: 'post',
    url: process.env.REACT_APP_API_URL + 'dreams/records',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "description": description,
      "response": response,
      "user": user_id
    }
  }

  try {
    const response = await axios(config)
    return response.data
  } catch (error) {
    throw new Error(
      '[API]: Erreur lors de l\'insertion de dream',
    )
  }
}
