import axios from "axios";
const baseURL = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
  baseURL: baseURL,
});

// Add request interceptor to include token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to auto-refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token");

        const response = await api.post("/auth/refreshToken", {
          refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        // Save new token
        localStorage.setItem("accessToken", newAccessToken);

        // Update header and retry request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        // Refresh token invalid or expired – force logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        console.error("Refresh token failed:", err);
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
