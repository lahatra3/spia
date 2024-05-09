import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { UserInfo, UserInsertResult, userInfoage } from '../Type/Type'

/**
 * @param {UserInfo} UserInfo
 * @returns {UserInsertResult}
 */
export const insertUser = async (userInfo: UserInfo): Promise<UserInsertResult> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url:
    process.env.REACT_APP_API_URL + 'user/records',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "nom": userInfo.family_name,
      "prenom": userInfo.given_name,
      "age": userInfoage,
      "fullname": userInfo.name,
      "picture": userInfo.picture,
      "id_google": userInfo.id,
      "description": userInfo.email
    }
  }

  try {
    const response = await axios(config)
    return response.data
  } catch (error) {
    throw new Error(
      '[API]: Erreur lors de l\'insertion de l\'user',
    )
  }
}
