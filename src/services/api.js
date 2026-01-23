import axios from "axios";

// Usa variável de ambiente do Vite em produção, com fallback para localhost
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem("devburger:userData");

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
});
