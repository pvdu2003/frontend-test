import React, { useState } from "react";
import { loginHandler } from "../../../services/auth.service";
import Button from "../Button/Button";
import styles from "./LoginForm.module.css";
import { useAuth } from "../../../contexts/AuthContext";

interface Props {
  onClose: () => void;
}

const LoginForm: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginHandler(username);

      if (response?.code === 401) {
        setError("Invalid username");
        return;
      }
      login(response.accessToken, response.refreshToken);
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button text="Login" />
    </form>
  );
};

export default LoginForm;
