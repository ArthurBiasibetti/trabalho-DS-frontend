import HttpClient from "../config/axios"

export const getDemo = async () => {
  const data = await HttpClient.api.get('/')

  return data;
} 