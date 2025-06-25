import React from "react";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  name: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, content }) => (
  <div className={styles.card}>
    <p>"{content}"</p>
    <span>- {name}</span>
  </div>
);

export default TestimonialCard;
