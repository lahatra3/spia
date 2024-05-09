import axios, { AxiosRequestConfig } from 'axios'

/* types */
import { ThemesCategoryData } from '../Type/Type'

/**
 * @returns {ThemesCategoryData}
 */
export const getThemesCategorie = async (language: string, id: string): Promise<ThemesCategoryData> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: process.env.REACT_APP_API_URL  + `theme_${language}/records/${id}?expand=category`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios(config);
    console.log("getThemesCategorie :", response.data);
    return response.data
  } catch (error) {
    throw new Error('[API]: Erreur lors de la récupération de getThemesCategorie')
  }
}