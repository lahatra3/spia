import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { Dream } from '../Type/Type'

/**
 * @returns {Dream[]}
 */
export const getDreams = async (): Promise<Dream[]> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: process.env.REACT_APP_API_URL  + 'collections/voters/records',
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