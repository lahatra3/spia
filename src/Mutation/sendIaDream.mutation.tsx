import axios, { AxiosRequestConfig } from 'axios'

/**
 * @param {string} description
 * @returns {string}
 */
export const sendIaDream = async (description: string): Promise<string> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: process.env.REACT_APP_IA + '?key=demo',
    data: {
      prompt: description
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios(config)
    return response.data
  } catch (error) {
    throw new Error('[API]: Erreur lors de la récupération des sendIaDream')
  }
}