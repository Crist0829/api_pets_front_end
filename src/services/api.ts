import axios from "axios";
import useAuthStore from "@/stores/AuthStore"; // Ajusta la ruta a tu store de zustand si es diferente
import { BASE_URL_API } from "@/config";

const api = axios.create({
  baseURL: BASE_URL_API, // Reemplaza con tu URL base
});

// Interceptor para adjuntar el token en cada petición
api.interceptors.request.use(
  (config) => {
    const { auth } = useAuthStore.getState(); // Accede al estado de autenticación
    const accessToken = localStorage.getItem('access_token')

    if (auth.authenticated || accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas y verificar expiración del token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { logout } = useAuthStore.getState();
    if (error.response?.status === 401) {
      // Si el token ha expirado o la autenticación es inválida, cerramos sesión
      logout();
    }

    return Promise.reject(error);
  }
);

export default api;
