import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { ThemesData } from '../Type/Type'

/**
 * @returns {ThemesData}
 */
export const getThemes = async (language: string): Promise<ThemesData> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: process.env.REACT_APP_API_URL  + `theme_${language}/records`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios(config);
    console.log("response.getThemes :", response.data);
    return response.data
  } catch (error) {
    throw new Error('[API]: Erreur lors de la récupération de getThemes')
  }
}