import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { UserData } from '../Type/Type'

/**
 * @returns {Dream[]}
 */
export const getUser = async (id_google: string): Promise<UserData> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: process.env.REACT_APP_API_URL  + `user/records?filter=(id_google='${id_google}')`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios(config);
    return response.data
  } catch (error) {
    throw new Error('[API]: Erreur lors de la récupération de l\'user')
  }
}