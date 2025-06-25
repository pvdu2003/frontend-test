import React from "react";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  name: string;
  image: string;
  company: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  company,
  text,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={image} alt={name} className={styles.avatar} />
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.company}>{company}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TestimonialCard;
