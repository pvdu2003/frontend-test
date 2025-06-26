import React, { useState } from "react";
import { login } from "../../../services/auth.service";
import Button from "../Button/Button";
import styles from "./LoginForm.module.css";

interface Props {
  onClose: () => void;
}

const LoginForm: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      await login(username);
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button text="Login" onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;
