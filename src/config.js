// config.js
const API_URL = "https://desperfectos-web-back.vercel.app"; // URL de producción como fallback
const DEV_URL = "http://localhost:8080"; // URL de desarrollo

const isDevelopment = window.location.hostname === 'localhost'; // O alguna otra lógica para determinar el entorno

export const config = {
  apiUrl: isDevelopment ? DEV_URL : API_URL,
};
