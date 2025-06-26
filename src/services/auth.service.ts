import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

export const login = async (username: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { username });
  return response.data;
};
export const logout = async () => {
  const response = await axios.post(`${API_URL}/auth/logout`);
  return response.data;
};
