import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { UserInfo } from '../Type/Type'

/**
 * @returns {Dream[]}
 */
export const getUserInfo = async (access_token: string): Promise<UserInfo> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: process.env.REACT_APP_CLIENT_USER_INFO  + '?alt=json&access_token=' + access_token,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios(config)
    return response.data
  } catch (error) {
    throw new Error('[API]: Erreur lors de la récupération des Voters')
  }
}