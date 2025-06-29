import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
