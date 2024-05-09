import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { CommonData } from '../Type/Type'

/**
 * @returns {CommonData}
 */
export const common = async (language: string): Promise<CommonData> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: process.env.REACT_APP_API_URL  + `common_${language}/records?expand=themes`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios(config);
    console.log("response.data :", response.data);
    return response.data
  } catch (error) {
    throw new Error('[API]: Erreur lors de la récupération de CommonData')
  }
}