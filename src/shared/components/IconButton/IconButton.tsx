import React from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const IconButton: React.FC<IconButtonProps> = ({
  text,
  onClick,
  variant = "primary",
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}{" "}
      <span className={styles.icon}>
        <img src="./images/arrow.png" alt="" />
      </span>
    </button>
  );
};

export default IconButton;
